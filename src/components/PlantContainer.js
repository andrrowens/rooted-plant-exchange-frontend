import React from 'react'
import PlantCard from './PlantCard'

const PlantContainer = ( {plants, setPlants }) => {

    const mappedPlants = plants.map(plant => (
        <PlantCard {...plant} key={plant.id} setPlants={setPlants} />)); 

  return (

    <div>
        <h2 className="plant-header">View Plants</h2>
            <div> 
                {mappedPlants}
            </div>
    </div>   
    )
}

export default PlantContainer
