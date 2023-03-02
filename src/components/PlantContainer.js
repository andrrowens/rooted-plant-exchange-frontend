import React from 'react'
import PlantCard from './PlantCard'

const PlantContainer = ( {plants, setPlants, apiPlants, setApiPlants }) => {

    const mappedPlants = plants.map(plant => (
        <PlantCard {...plant} key={plant.id} setPlants={setPlants} />)); 

    const mappedApiPlants = apiPlants.map(apiPlant => (
        <PlantCard {...apiPlant} key={apiPlant.id} setApiPlants={setApiPlants} />)); 

  return (

    <div>
        <h2 className="plant-header">View Plants</h2>
            <div> 
                {mappedPlants}
                {mappedApiPlants}
            </div>
    </div>   
    )
}

export default PlantContainer
