import './App.css';
import React from 'react';
import Reservations from './Reservations';
import { useEffect, useState } from 'react';
import Form from './Form';

function App() {
  const [allReservations, setAllReservations] = useState([])

  useEffect(() => {
    getReservations()
    console.log(allReservations)
  }, [])

  function getReservations(){
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => setAllReservations(data))
  }

  return (
    <div className="App">
      <h1>Turing Cafe Reservations</h1>
      <Form />
      <Reservations allReservations={allReservations}/>
    </div>
  );
}

export default App; 