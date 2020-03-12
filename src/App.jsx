import React, { Component } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import {DisplayFlights} from './DisplayFlights';

const App = () => {

  const when = DateTime.local().plus({days: 1}).toFormat('dd/MM/yyyy');
  const query = new URLSearchParams({
    partner: 'picky',
    flyFrom: 'PRG',
    to: 'VLC'
  })
  const url = new URL(`?${query}`, 'https://api.skypicker.com/flights');

  const getSearchResults = async () => {
    
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
  };

  getSearchResults();  
  
  return (
    <div className="App">
      <DisplayFlights />
    </div>
  );
}


export default App;
