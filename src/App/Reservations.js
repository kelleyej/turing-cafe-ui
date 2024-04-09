import Card from "./Card"
import './Reservations.css';

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
        <main className="reservation-container">
            {reservations}
        </main>
    )
   
}