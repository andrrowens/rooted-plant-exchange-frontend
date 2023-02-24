import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar= () => {

    return (
    <nav className="nav">
  
        <NavLink exact activeStyle={{ color: "green" }} to="/" className="nav-link">Home</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/plants" className="nav-link">Plants</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/listings" className="nav-link">Listings</NavLink>


    </nav>
    )
}

export default Navbar