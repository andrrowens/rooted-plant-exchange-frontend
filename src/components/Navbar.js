import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useState } from "react"


const Navbar= () => {

    const { setUsers } = useContext(UserContext)

    // const [showLogout, setShowLogout] = useState(false);

    const{isLoggedIn, setIsLoggedIn} = useState(true)

  
    const handleLogout = () => {
     fetch("/logout", {
        method: "DELETE",
      })
        .then((r) => {
          if (r.status === 204) {
            setUsers(null)
            alert("You are logged out")
          } else {
            r.json()
            .then(err => alert(err))
          }
        })
    }

    return (
    <nav className="nav">
  
        <NavLink exact activeStyle={{ color: "green" }} to="/" className="nav-link">Home</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/plant_library" className="nav-link">Plant Library</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/user_plants" className="nav-link">User's Plants</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/listings" className="nav-link">Listings</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/account" className="nav-link">My Account</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/friendships" className="nav-link">Friendships</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/email" className="nav-link">Send Email</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/signup" className="nav-link">Sign Up</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/authenticated_user" className="nav-link">Login</NavLink>

        <header className="logout-btn"> <button onClick={handleLogout}>Logout</button> </header>

   

        {/* <div>
            {isLoggedIn ? <button>Logout</button> : null}
        </div> */}

        {/* <button className="form-button" onClick={handleLogout} { isLoggedIn? null : }>Logout </button> */}



        {/* <button className="logout-btn" onClick={handleLogout}>{ !showLogout ? "Logout" : null} </button> */}
{/* 
        <button className="form-button" onClick={handleShowForm}>{ !showForm ? "Submit A Review!" : "Hide Review Form"}</button> */}

    </nav>
    )
}

export default Navbar