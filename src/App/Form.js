import { useState } from 'react';

export default function Form({addReservation}){
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [number, setNumber] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        const newReservation = {
            id: Date.now(),
            name, 
            date, 
            time, 
            number
        }
        addReservation(newReservation)
    }

    return (
        <form>
            <input type='text' name='name' value={name} onChange={event => setName(event.target.value)}/>
            <input type='text' name='date' value={date} onChange={event => setDate(event.target.value)}/>
            <input type='text' name='time' value={time} onChange={event => setTime(event.target.value)}/>
            <input type='text' name='number' value={number} onChange={event => setNumber(event.target.value)}/>
            <button onClick={handleSubmit}>Make Reservation</button>
        </form>
    )
}