describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
        statusCode: 200, 
        body: [{
          id: 1,
          name: "Christie",
          date: "12/29",
          time: "7:00",
          number: 12
          },
          {
          id: 2,
          name: "Leta",
          date: "4/5",
          time: "7:00",
          number: 2
          },
          {
            id: 3,
            name: "Pam",
            date: "1/21",
            time: "6:00",
            number: 4
            }
        ]
    })
    cy.visit('http://localhost:3002/')
  })
  it('Should show user homepage to make and see reservations', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
    cy.get('form').contains('button', 'Make Reservation')
    cy.get('.reservation-container').first().contains('Christie')
    cy.get('.reservation-container').last().contains('Pam')
    cy.get('.reservation-container').find('.card').should('have.length', 3)
  })
  it('Should show new reservation when click make reservation button', () => {
      cy.intercept('POST', 'http://localhost:3001/api/v1/reservations', {
        statusCode: 201, 
        body: [{
          id: 11,
          name: "Matt",
          date: "4/9",
          time: "12:30",
          number: 3
        }
      ]
    })
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200, 
      body: [{
        id: 1,
        name: "Christie",
        date: "12/29",
        time: "7:00",
        number: 12
        },
        {
        id: 2,
        name: "Leta",
        date: "4/5",
        time: "7:00",
        number: 2
        },
        {
        id: 3,
        name: "Pam",
        date: "1/21",
        time: "6:00",
        number: 4
        },
        {
          id: 11,
          name: "Matt",
          date: "4/9",
          time: "12:30",
          number: 3
        }
      ]
  })
    cy.get("input[name='name']").type('Matt').should('have.value', 'Matt')
    cy.get("input[name='date']").type('4/9').should('have.value', '4/9')
    cy.get("input[name='time']").type('12:30').should('have.value', '12:30')
    cy.get("input[name='number']").type('3').should('have.value', '3')
    cy.get('button').contains('Make Reservation').click()
    cy.get('.reservation-container').last().contains('Matt')
  })
})