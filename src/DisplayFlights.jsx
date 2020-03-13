import React, { Component } from 'react';
import './App.css';
import { DateTime } from 'luxon';

export const DisplayFlights = ({flights}) =>{
  const rows = flights.map((flight, index) => {
    const dTime = DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')
    const aTime = DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')

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
      <table>
        <thead>
          <tr>
            <th>Origin</th>
            <th>Destination</th>
            <th>Time of departure</th>
            <th>Time of arrival</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
         </tbody>
      </table>
    )
}

// export default DisplayFlights;
