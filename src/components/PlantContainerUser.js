import React from 'react'
import PlantCardUser from './PlantCardUser'

const PlantContainerUser = ( {plants, setPlants, currentUser }) => {

    const mappedPlants = plants.map(plant => (
        <PlantCardUser {...plant} key={plant.id} setPlants={setPlants} />)); 

 
  return (

    <div className="user-plant-box">
        <h2 className="plant-header">User Submitted Plants</h2>
            <div> 
                {mappedPlants}
              
            </div>
    </div>   
    )
}

export default PlantContainerUser