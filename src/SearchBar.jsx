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

const destination = [
  'Valencia',
  'Barcelona',
  'Madrid',
  'Milano',
  'Athens'
]

const DDMenu = ({title, items}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const list = items.map((item, index) => {
    return <DropdownItem key={`dest-${index}`}>{item}</DropdownItem>
  })
  return (
    <div style={padding}>
    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret>
        { title}
        </DropdownToggle>
      <DropdownMenu>
        {list}
      </DropdownMenu>
    </Dropdown>
  </div>

  )
}

export const SearchBar = ({searchClicked}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);


  return(
    <div style={menu}>
      <DDMenu title="Departure" items={departures}/>
      <DDMenu title="Destination" items={destination}/>

      {/* <div style={padding}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Destination
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Valencia</DropdownItem>
          <DropdownItem>Barcelona</DropdownItem>
          <DropdownItem>Madrid</DropdownItem>
          <DropdownItem>Milano</DropdownItem>
          <DropdownItem>Athens</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div> */}

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