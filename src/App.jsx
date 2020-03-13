import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import { Spinner } from 'reactstrap';
import {DisplayFlights} from './DisplayFlights';
import {SearchBar} from './SearchBar';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flyFrom, setflyFrom] = useState('PRG');
  const [to, setTo] = useState('VLC');
  // const [dTime, setDTime] = useState('');

  const when = DateTime.local().plus({days: 1}).toFormat('dd/MM/yyyy');
  const query = new URLSearchParams({
    partner: 'picky',
    flyFrom: flyFrom,
    to: to
  })


  const url = new URL(`?${query}`, 'https://api.skypicker.com/flights');

  // const handleInputChange = (e) => {
  //   setSearchValue(e.target.value)
  // }

  // const handleKeyPress = (e) => {
  //   if(e.key === 'Enter') getSearchResults()
  // }


  const getSearchResults = async () => {
    setLoading(true);
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

  function searchClicked(){
    getSearchResults();
  }

  // useEffect(()=>{
  //   getSearchResults()
  // },[flights])

  return (
    <div className="App">
      <SearchBar searchClicked={searchClicked}/>
      <DisplayFlights flights={flights} loading={loading}/>
    </div>
  );
}

export default App;
