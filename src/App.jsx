import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import {DisplayFlights} from './DisplayFlights';

const App = () => {
  const [flights, setFlights] = useState([]);

  const when = DateTime.local().plus({days: 1}).toFormat('dd/MM/yyyy');
  const query = new URLSearchParams({
    partner: 'picky',
    flyFrom: 'PRG',
    to: 'VLC'
  })
  const url = new URL(`?${query}`, 'https://api.skypicker.com/flights');

  const getSearchResults = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      const flights = data.data;
      setFlights(flights);
      console.log(flights);
    }catch{
      // setFlights({
      //   error: true,
      //   errorMessage: err.message,
      // })
    }
  };

  useEffect(()=>{
    getSearchResults()
  },[])

  return (
    <div className="App">
      <DisplayFlights flights={flights}/>
    </div>
  );
}


export default App;
