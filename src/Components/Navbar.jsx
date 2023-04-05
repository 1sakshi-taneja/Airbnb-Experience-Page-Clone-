import React from 'react'
import airbnblogo from '../../public/images/airbnb-logo.png'
import photogrid from '../../public/images/photo-grid.png'
import '../Navbar.css'

function Navbar()
{
    return(
    <div>
       <nav className="navbar">
        <img src={airbnblogo} alt="airbnb-logo"></img>
       </nav>
       <img className="photo-grid" src={photogrid} alt="photo grid" />
       <h1 className="hero--header">Online Experiences </h1>
       <p className="/*Navbar-p*/ hero--text ">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home </p>
    </div>
    )

}

export default Navbar