import React from 'react'
import { useState } from "react";
import PlantEditForm from "./PlantEditForm"

const PlantCardUser = ( { id, name, watering, sunlight, environment, notes, image, user_id, setPlants}) => {

    const [showPlantForm, setShowPlantForm] = useState(false)

    const handlePlantClick = () => {
        setShowPlantForm(currentValue => !currentValue)
    }

    const handleDeletePlant = () => {
        fetch(`/user_plants/${id}`,
        {
            method: "DELETE"
        })
        .then(() => setPlants(currentPlants => currentPlants.filter(element => element.id !== id)))
    }
    return (
        <>
            <div className="plant-box">
                {showPlantForm ? <PlantEditForm id={id} name={name} watering={watering} sunlight={sunlight} environment={environment} notes={notes} image={image} setPlants={setPlants} /> : null}
        
                <p className="common-name"><u>Plant Name:</u> {name}</p>
                <p className="watering"><u>Watering Notes:</u> {watering}</p>
                <p className="sunlight"><u>Sunlight Notes:</u> {sunlight}</p>
                <p className="environment"><u>Environment Notes:</u> {environment}</p>
                <p className="environment"><u>Other Notes:</u> {notes}</p>
                <p className="user-id"><u>User ID:</u> {user_id}</p>
                <img className="plant-image" src={image} alt={""}></img> <br/>
                <button className="form-btn" onClick={handleDeletePlant}>DELETE PLANT</button> 
                <button className="form-btn" onClick={handlePlantClick}>EDIT LISTING</button>          
                          
            </div>
        </>
    )

}

export default PlantCardUser