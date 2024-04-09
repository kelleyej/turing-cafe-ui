import Card from "./Card"

export default function Reservations({allReservations}){
    const reservations = allReservations.map(reservation => {
         return (
            <Card
            key={reservation.id}
            id={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            />
         )
    
    })

    return (
        <main>
            {reservations}
        </main>
    )
   
}