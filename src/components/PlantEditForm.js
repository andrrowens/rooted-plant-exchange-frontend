import React from "react"
import { useState } from "react";

const PlantEditForm = ({id, name, watering, sunlight, environment, notes, image, setPlants, handlePlantClick}) => {

    const [editPlant, setEditPlant] = useState({
        name: name,
        watering: watering,
        sunlight: sunlight,
        environment: environment,
        notes: notes,
        image: image
    });

    const handleChange = (e) => {
        setEditPlant({...editPlant, [e.target.name]: e.target.value})
    }

    const handleEditPlant = (e) => {
        e.preventDefault()
        fetch(`/user_plants/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(editPlant),
            
        })
        .then(response => {
            if(response.status ===202) {
                response.json()
                .then(plant => {

                    setPlants(currentPlants => {
                        const updatedPlants = currentPlants.map(pla =>{
                            return pla.id === id ? plant : pla
                        })
                        return updatedPlants
                    })
                    handlePlantClick()
                })
            } else {
                response.json()
                .then(error => alert(error.error))
            }
        })
        .catch(error => alert(error))

    }

    return(
        <form className="plant-edit-form" onSubmit={handleEditPlant}>
            <input className="user-input" placeholder="Name" type="text" name="name" value={editPlant.name} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Watering" type="text" name="watering" value={editPlant.watering} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Sunlight" type="text" name="sunlight" value={editPlant.sunlight} onChange={handleChange} /> <br/>
            <input className="user-input" placeholder="Environment" type="text" name="environment" value={editPlant.environment} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Notes" type="text" name="notes" value={editPlant.notes} onChange={handleChange} /> <br/>  
            <input className="user-input" placeholder="Image" type="text" name="image" value={editPlant.image} onChange={handleChange} /> <br/> 
            <input className="plant-btn" type="submit" value="Update Plant" />
        </form>
    )
}

export default PlantEditForm;