import React from 'react'
import { Link } from 'react-router-dom'
import "./NoOrders.css"
export default function NoOrders() {
  return (
    <div className='container'>
      <h1 id="text1">No Orders Till Now !</h1>
    <div className='btnContainer'>
        <Link to="/cart"><button id='cartBtn'>Cart</button></Link>
        <Link to="/home"><button id='homeBtn'>Home</button></Link>
    </div>
    </div>
  )
}
