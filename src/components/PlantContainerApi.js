import React from 'react'
import PlantCardApi from './PlantCardApi'

const PlantContainerApi = ( { apiPlants, setApiPlants }) => {

    const mappedApiPlants = apiPlants.map(apiPlant => (
        <PlantCardApi {...apiPlant} key={apiPlant.id} setApiPlants={setApiPlants} />)); 

  return (

    <div>
        <h2 className="plant-header">Plant Library</h2>
            <div> 
                {/* {mappedPlants} */}
                {mappedApiPlants}
            </div>
    </div>   
    )
}

export default PlantContainerApi
