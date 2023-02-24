import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlantContainer from "./PlantContainer"
import PlantForm from "./PlantForm"
import Navbar from "./Navbar"

function App() {

const [plants, setPlants] = useState([])

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

  return (
    <div className="App">
      <Navbar />
       

          <Route path="/plants">
            <PlantContainer plants={plants} setPlants={setPlants} />
            <PlantForm setPlants={setPlants}  />
          </Route >

      
   </div>

  )

}

export default App;
