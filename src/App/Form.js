import { useState } from 'react';
import './Form.css';

export default function Form({getReservations, addReservation}){
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
        
        postReservation(newReservation)
        getReservations()
        clearForm()
        
    }

    function clearForm(){
        setName('')
        setDate('')
        setTime('')
        setNumber('')
    }

    function postReservation(newReservation){
        fetch('http://localhost:3001/api/v1/reservations', {
            method: 'POST', 
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify(newReservation)
        })
        .then(data => {
            addReservation(data)
            getReservations()
        })
            
        
            
    }

    return (
        <form>
            <input type='text' name='name' value={name} placeholder='Name' onChange={event => setName(event.target.value)}/>
            <input type='text' name='date' value={date} placeholder='Date (mm/dd)' onChange={event => setDate(event.target.value)}/>
            <input type='text' name='time' value={time} placeholder='Time' onChange={event => setTime(event.target.value)}/>
            <input type='text' name='number' value={number} placeholder='Number of guests' onChange={event => setNumber(Number(event.target.value))}/>
            <button onClick={event => handleSubmit(event)}>Make Reservation</button>
        </form>
    )
}