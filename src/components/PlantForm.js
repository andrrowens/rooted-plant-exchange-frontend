import React from 'react'
import { useState } from 'react';

const PlantForm = ({setPlants, currentUser}) => {


  const [message, setMessage] = useState("")

  const [newPlant, setNewPlant] = useState({
    name: "",
    watering: "",
    sunlight: "",
    environment: "",
    notes: "",
    image: "",
    user_id: ""
  })

  const handleChange = (e) => {
    setNewPlant({...newPlant, [e.target.name]: e.target.value})
}



const handleSubmit = (e) => {
    e.preventDefault()
        fetch("/plants", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
        .then(response => {
            if(response.status===201){
                response.json()
                .then(newPlantObj => {
                    setPlants(currentVal => [...currentVal, newPlant])
                 
                } )
            } else {
                response.json()
                .then(messageObj => setMessage(messageObj.message))
            }
 
        })
       
        .catch(error => alert(error))
        setNewPlant({
          name: "",
          watering: "",
          sunlight: "",
          environment: "",
          notes: "",
          image: "",
          user_id: ""
        })
}


  return (
    <div>
      <form className="user-plant-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Submit New Plant</h2>
          <div>
              <input className="user-input" type="text" name="name" placeholder='Plant Name:' onChange={handleChange} value={newPlant.name} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="watering" placeholder='Watering Notes:' onChange={handleChange} value={newPlant.watering} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="sunlight" placeholder='Sunlight Notes:' onChange={handleChange} value={newPlant.sunlight} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="environment" placeholder='Environment Notes:' onChange={handleChange} value={newPlant.environment} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="notes" placeholder='Other Notes:' onChange={handleChange} value={newPlant.notes} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="image" placeholder='Image URL:' onChange={handleChange} value={newPlant.image} required/>
          </div>

          <div>
              <input className="user-input" type="text" name="userid" placeholder='User ID:' onChange={handleChange} value={currentUser.id} required/>
          </div>

          

          <input className="submit-btn" type="submit" value="Submit New Plant" />
          
      </form>
    </div>
  )
}

export default PlantForm
