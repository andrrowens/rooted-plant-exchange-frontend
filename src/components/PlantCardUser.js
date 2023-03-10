import React from 'react'
import { useState } from "react";
import PlantEditForm from "./PlantEditForm"
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const PlantCardUser = ( { id, name, watering, sunlight, environment, notes, image, user_id, setPlants, currentUser}) => {

    const [showPlantForm, setShowPlantForm] = useState(false)

    const { user } = useContext(UserContext)

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
                {showPlantForm ? <PlantEditForm id={id} name={name} watering={watering} sunlight={sunlight} environment={environment} notes={notes} image={image} setPlants={setPlants} currentUser={currentUser} /> : null}
        
                <p className="user-plant-info"><u>Plant Name:</u> {name}</p>
                <p className="user-plant-info"><u>Watering Notes:</u> {watering}</p>
                <p className="user-plant-info"><u>Sunlight Notes:</u> {sunlight}</p>
                <p className="user-plant-info"><u>Environment Notes:</u> {environment}</p>
                <p className="user-plant-info"><u>Other Notes:</u> {notes}</p>

                {/* <p className="user-id"><u>User ID:</u> {currentUser.id}</p> */}
                <p className="user-plant-info"><u>User ID:</u> {user_id}</p>

                <img className="plant-image" src={image} alt={""}></img> <br/>
                {/* <button className="user-plant-btn" onClick={handleDeletePlant}>DELETE PLANT</button> 
                <button className="user-plant-btn" onClick={handlePlantClick}>EDIT PlANT</button>   */}
                
                <div>
                { user && user.id === user_id ? <> 
                    <button className="form-btn" onClick={handlePlantClick}>EDIT PLANT</button>
                    <button className="form-btn" onClick={handleDeletePlant}>DELETE PLANT</button></> : null }
                </div>

           
                {/* { user ? 
                    <button className="form-btn" onClick={handleDeletePlant}>DELETE PLANT</button>
                    :
                    null }
                </div> */}
             
            </div>
        </>
    )

}

export default PlantCardUser