import './App.css';
import React from 'react';
import Reservations from './Reservations';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    getReservations()
  }, [])

  function getReservations(){
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      <Reservations />
    </div>
  );
}

export default App; 