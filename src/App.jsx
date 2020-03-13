import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import { Spinner } from 'reactstrap';
import {DisplayFlights} from './DisplayFlights';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }catch (err){
      console.log(err);
    }
  };

  useEffect(()=>{
    getSearchResults()
  },[])

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="App">
      <DisplayFlights flights={flights}/>
    </div>
  );
}

export default App;

const loading = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}



function Loader() {
  return (
    <div style={loading}>
      <Spinner color="primary" />
      <p>Loding...</p>
    </div>
    );
}
