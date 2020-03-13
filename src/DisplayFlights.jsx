import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import { Table } from 'reactstrap';
import { Spinner } from 'reactstrap';


export const DisplayFlights = ({flights, loading}) =>{
  if (loading) {
    return (
      <Loader />
    );
  }


  const rows = flights.map((flight, index) => {
    const dTime = DateTime.fromMillis(flight.dTime * 1000).toFormat('dd/MM hh:mm')
    const aTime = DateTime.fromMillis(flight.aTime * 1000).toFormat('dd/MM hh:mm')

    return (
      <tr key={index}>
        <td>{flight.flyFrom}</td>
        <td>{flight.flyTo}</td>
        <td>{dTime}</td>
        <td>{aTime}</td>
        <td>{flight.price}</td>
      </tr>
      // {flight}
    )
  });
  

  console.log(rows);
  return(
      <Table>
        <thead>
          <tr>
            <th>Departure</th>
            <th>Destination</th>
            <th>Time of departure</th>
            <th>Time of arrival</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
         </tbody>
      </Table>
    )
}

// export default DisplayFlights;

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
      <p>Loading...</p>
    </div>
    );
}
