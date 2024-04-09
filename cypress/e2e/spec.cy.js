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
  })
})