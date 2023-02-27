import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


const Navbar= () => {

    const { setUsers } = useContext(UserContext)

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
     
        <NavLink activeStyle={{ color: "green" }} to="/plants" className="nav-link">Plants</NavLink>
     
        <NavLink activeStyle={{ color: "green" }} to="/listings" className="nav-link">Listings</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/signup" className="nav-link">Sign Up</NavLink>

        <NavLink activeStyle={{ color: "green" }} to="/authenticated_user" className="nav-link">Login</NavLink>

        <header className="logout-btn"> <button onClick={handleLogout}>Logout</button> </header>

    </nav>
    )
}

export default Navbar