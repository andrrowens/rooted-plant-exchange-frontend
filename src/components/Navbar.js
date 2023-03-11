import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useState } from 'react';


const Navbar = () => {

    const { setUser } = useContext(UserContext)


    // const [showLogout, setShowLogout] = useState(true);

    // const{isLoggedIn, setIsLoggedIn} = useState(false)

  
    // const handleLogout = () => {
    //  fetch("/logout", {
    //     method: "DELETE",
    //   })
    //     .then((r) => {
    //       if (r.status === 204) {
    //         setUsers(null)
    //         alert("You are logged out")
    //       } else {
    //         r.json()
    //         .then(err => alert(err))
    //       }
    //     })
    // }

    // const handleShowLogout = () => {
    //   setShowLogout(currentValue => !currentValue) 
    // }



     const handleLogout = () => {
     fetch("/logout", {
        method: "DELETE",
      })
        .then((r) => {
          if (r.status === 204) {
            setUser(null)
            alert("You are logged out")
          } else {
            r.json()
            .then(err => alert(err))
          }
        })
    }

    return (
    <nav className="nav">
  
        <NavLink exact activeStyle={{ color: "#27AE60" }} to="/home" className="nav-link">Home</NavLink>
     
        <NavLink activeStyle={{ color: "#27AE60" }} to="/plant_library" className="nav-link">Plant Library</NavLink>

        <NavLink activeStyle={{ color: "#27AE60" }} to="/user_plants" className="nav-link">User's Plants</NavLink>
     
        <NavLink activeStyle={{ color: "#27AE60" }} to="/listings" className="nav-link">Listings</NavLink>

        <NavLink activeStyle={{ color: "#27AE60" }} to="/account" className="nav-link">My Account</NavLink>

        <NavLink activeStyle={{ color: "#27AE60" }} to="/friendships" className="nav-link">Friendships</NavLink>

        <NavLink activeStyle={{ color: "#27AE60" }} to="/email" className="nav-link">Contact Us</NavLink>

        <NavLink activeStyle={{ color: "#27AE60" }} to="/signup" className="nav-link">Sign Up</NavLink>

        <NavLink activeStyle={{ color: "#27AE60" }} to="/authenticated_user" className="nav-link">Login</NavLink>

        <header className="logout-btn"> <button onClick={handleLogout}>Logout</button> </header>

        




        {/* <header className="logout-btn" {...showLogout ? "Logout" : null}> <button onClick={handleLogout}>Logout</button> </header> */}

        {/* <button className="logout-button" onClick={handleLogout}>{ !showLogout ? "Logout" : null }</button> */}

        {/* <div>
            <button className="logout-button" onClick={(handleLogout) => handleShowLogout()}>Log Out</button>
            {showLogout ? "Logout" : null}
        </div> */}


        {/* <div>
            {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : null}
        </div> */}


    </nav>
    )
}

export default Navbar