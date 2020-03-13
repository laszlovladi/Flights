import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import { Table } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const departures = [
  'Prague',
  'Berlin',
  'Warsaw',
  'Pardubice'
];

const destinations = [
  'Valencia',
  'Barcelona',
  'Madrid',
  'Milano',
  'Athens'
]

const DDMenu = ({title, items, handle}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const select = (e) => {
    handle(e.target.innerText);
  }
  const list = items.map((item, index) => {
    return <DropdownItem key={`dest-${index}`} onClick={select}>{item}</DropdownItem>
  })
  return (
    <div style={padding}>
    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret>
        {title}
        </DropdownToggle>
      <DropdownMenu>
        {list}
      </DropdownMenu>
    </Dropdown>
  </div>

  )
}

export const SearchBar = ({searchClicked, departure, setDeparture, destination, setDestination}) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return(
    <div style={menu}>
        <DDMenu title={departure} items={departures} handle={setDeparture}/>
        <DDMenu title={destination} items={destinations} handle={setDestination}/>
      <div style={padding}>
        <input type="checkbox" id="direct" value=""/>
        <label htmlFor="diredt">Direct flights only</label>
      </div>
      <div style={padding}>
        <button onClick={searchClicked}>Search</button>
      </div>
    </div>
  )
}

const padding = {
  padding: '5px',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // height: '100vh'
}
const menu = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // height: '100vh'
}