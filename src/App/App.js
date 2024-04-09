import './App.css';
import React from 'react';
import Reservations from './Reservations';
import { useEffect, useState } from 'react';
import Form from './Form';

function App() {
  const [allReservations, setAllReservations] = useState([])

  useEffect(() => {
    getReservations()
  }, [])

  function getReservations(){
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => setAllReservations(data))
  }

  function addReservation(newReservation){
    setAllReservations([...allReservations, newReservation])
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addReservation={addReservation}/>
      <Reservations allReservations={allReservations}/>
    </div>
  );
}

export default App; 