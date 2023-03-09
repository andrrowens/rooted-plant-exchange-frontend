import React from 'react'
import { useState } from 'react';

const ListingForm = ({ plants, setListings, currentUser }) => {

    const [newListing, setNewListing] = useState({
        title: "",
        plant_name: "",
        description: "",
        city: "",
        state: "",
        zipcode: "",
        image: "",
        plant_id: "",
        user_id: ""
    })

    const handleChange = (e) => {
        setNewListing(currentListing => ({...currentListing, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/listings", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newListing)
            })
            .then(response => {
                console.log("fetch")
                if(response.status===201){
                    response.json()
                    .then(listing => {
                        console.log(listing)
                        setListings(currentListing => [...currentListing, listing])
                        setNewListing({
                            title: "",
                            plant_name: "",
                            description: "",
                            city: "",
                            state: "",
                            zipcode: "",
                            image: "",
                            plant_id: "",
                            user_id: ""
                        })
                    } )
                } else {
                    response.json()
                    .then(errorObj => setListings(errorObj.error))
                }    
            })
            .catch(error => alert(error))
    }

    return (
        <div>
            <form className="listing-form" onSubmit={handleSubmit}>
                <h2 className="form-title"> Create New Listing </h2>
                <div>
                    <input className="user-input" type="text" name="title" placeholder='Title:' onChange={handleChange} value={newListing.title} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="plant_name" placeholder='Plant Name:' onChange={handleChange} value={newListing.plant_name} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="description" placeholder='Description:' onChange={handleChange} value={newListing.description} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="state" placeholder='State:' onChange={handleChange} value={newListing.state} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="city" placeholder='City:' onChange={handleChange} value={newListing.city} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="zipcode" placeholder='Zip Code:' onChange={handleChange} value={newListing.zipcode} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="image" placeholder='Image URL:' onChange={handleChange} value={newListing.image} required />
                </div>


                <div>
                    <input className="user-input" type="text" name="plant_id" placeholder='Plant ID:' onChange={handleChange} value={newListing.plant_id} required />
                </div>

                <div>
                    <input className="user-input" type="text" name="user_id" placeholder='User ID:' onChange={handleChange} value={currentUser.username} required />
                </div>

                {/* <div>
                    <select className="user-input" name="campsite_id" onChange={handleChange} value={newListing.campsite_id} required>
                        <option value=""> Select Campsite </option>
                        {campsites.map(campsite => <option value={campsite.id}>{campsite.name}</option>)}
                    </select>
                </div> */}

                <input className="lis-submit-btn" type="submit" value="Create Listing" />
            </form>
        </div>
    )
}


export default ListingForm