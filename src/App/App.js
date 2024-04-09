import './App.css';
import React from 'react';
import Reservations from './Reservations';
import { useEffect, useState } from 'react';

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
      <Reservations allReservations={allReservations}/>
    </div>
  );
}

export default App; 