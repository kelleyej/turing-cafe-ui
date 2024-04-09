import { useState } from 'react';

export default function Form(){
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [number, setNumber] = useState('')

    return (
        <form>
            <input type='text' name='name' value={name} onChange={event => setName(event.target.value)}/>
            <input type='text' name='date' value={date} onChange={event => setDate(event.target.value)}/>
            <input type='text' name='time' value={time} onChange={event => setTime(event.target.value)}/>
            <input type='text' name='number' value={number} onChange={event => setNumber(event.target.value)}/>
            <button>Make Reservation</button>
        </form>
    )
}