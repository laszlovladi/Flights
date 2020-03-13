import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import { Spinner } from 'reactstrap';
import {DisplayFlights} from './DisplayFlights';
import {SearchBar} from './SearchBar';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [display, setDisplay] = useState('empty');
  const [departure, setDeparture] = useState('Departure');
  const [destination, setDestination] = useState('Destination');
  const [cSelected, setCSelected] = useState(false);
  const [offset, setOffset] = useState(0);
  // const [dTime, setDTime] = useState('');

  const when = DateTime.local().plus({days: 1}).toFormat('dd/MM/yyyy');
  const code = {
    'Prague': 'PRG',
    'Berlin': 'BER',
    'Warsaw': 'WAW',
    'Pardubice': 'PED',
    'Valencia': 'VLC',
    'Barcelona': 'BCN',
    'Madrid': 'MAD',
    'Milano': 'MIL',
    'Athens': 'ATH'
  };
  const query = new URLSearchParams({
    partner: 'picky',
    flyFrom: code[departure],
    to: code[destination],
    limit: 10,
    offset: offset
  })


  const url = new URL(`?${query}`, 'https://api.skypicker.com/flights');

  // const handleInputChange = (e) => {
  //   setSearchValue(e.target.value)
  // }

  // const handleKeyPress = (e) => {
  //   if(e.key === 'Enter') getSearchResults()
  // }


  const getSearchResults = async () => {
    setDisplay('loading');
    try{
      const response = await fetch(url);
      const data = await response.json();
      const flights = data.data;
      setFlights(flights);
      setDisplay('table');
    }catch (err){
      console.log(err);
    }
  };

  function searchClicked(){
    if (destination !== 'Destination' && departure !== 'Departure'){
      getSearchResults();
    }else{
      const red = {color: 'red'}
      // return <h3 style={red}>"Destination" or "Departure" is not selected!</h3>
      alert('"Destination" or "Departure" is not selected!');
    }
  }

  useEffect(
    () => {
      getSearchResults();
    }, [offset]
  )


  // useEffect(()=>{
  //   getSearchResults()
  // },[flights])

  return (
    <div className="App">
      <SearchBar searchClicked={searchClicked} departure={departure} destination={destination} setDeparture={setDeparture} 
      setDestination={setDestination} cSelected={cSelected} setCSelected={setCSelected}/>
      <DisplayFlights flights={flights} display={display} departure={departure} destination={destination} cSelected={cSelected} 
      setCSelected={setCSelected} offset={offset} setOffset={setOffset}/>
    </div>
  );
}

export default App;
