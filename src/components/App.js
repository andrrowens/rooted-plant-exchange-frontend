import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlantContainer from "./PlantContainer"
import ListingsContainer from "./ListingsContainer"
import ListingForm from "./ListingForm"
import PlantForm from "./PlantForm"
import UserCard from "./UserCard"
import UserEditForm from "./UserEditForm"
import FriendshipContainer from "./FriendshipContainer"
import EmailForm from "./EmailForm"
import Navbar from "./Navbar"
import Signup from './Signup';
import AuthenticatedUser from './AuthenticatedUser';

function App() {

const [plants, setPlants] = useState([])
const [listings, setListings] = useState([])
const [users, setUsers] = useState([])
const [friendships, setFriendships] = useState([])
// const [currentUser, setCurrentUser] = useState([])

useEffect(() => { // fetch plants
  const fetchPlants = async () => {
    try {
      const resp = await fetch("/plants")
      const data = await resp.json()
      setPlants(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchPlants()
}, [])

useEffect(() => { // fetch listings
  const fetchListings = async () => {
    try {
      const resp = await fetch("/listings")
      const data = await resp.json()
      setListings(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchListings()
}, [])

useEffect(() => { // fetch all users
  const fetchUsers = async () => {
    try {
      const resp = await fetch("/users")
      const data = await resp.json()
      setUsers(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchUsers()
}, [])

useEffect(() => { // fetch friendships
  const fetchFriendships = async () => {
    try {
      const resp = await fetch("/friendships")
      const data = await resp.json()
      setFriendships(data)
    } catch (error) {
      alert(error)
    }
  }
  fetchFriendships()
}, [])

// useEffect(() => { // fetch current user
//   const fetchCurrentUser = async () => {
//     try {
//       const resp = await fetch("/users")
//       const data = await resp.json()
//       setCurrentUser(data)
//     } catch (error) {
//       alert(error)
//     }
//   }
//   fetchCurrentUser()
// }, [])

  return (
    <div className="App">
      <Navbar />
       

          <Route path="/plants">
            <PlantContainer plants={plants} setPlants={setPlants} />
            <PlantForm setPlants={setPlants}  />
          </Route >

          <Route path="/listings">
            <ListingsContainer listings={listings} setListings={setListings} />
            <ListingForm plants={setPlants} setListings={setListings}  />
          </Route >

          <Route path="/profile">
            <UserCard users={users} setUsers={setUsers} />
            {/* <UserCard currentUse={currentUser} setCurrentUser={setCurrentUser} /> */}
            <UserEditForm users={users} setUsers={setUsers} />
          </Route >

          <Route path="/friendships">
            <FriendshipContainer friendships={friendships} setFriendships={setFriendships}  />
          </Route >

          <Route path="/email">
            <EmailForm />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>


          <Route path="/authenticated_user">
            <AuthenticatedUser /> 
          </Route>


      
   </div>

  )

}

export default App;
