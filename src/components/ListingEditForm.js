import React from "react"
import { useState } from "react";

const ListingEditForm = ({id, title, plant_name, description, city, state, zipcode, image, setListings, handleClick}) => {

    const [editListing, setEditListing] = useState({
        title: title,
        plant_name: plant_name,
        description: description,
        city: city,
        state: state,
        zipcode: zipcode,
        image: image
    });

    const handleChange = (e) => {
        setEditListing({...editListing, [e.target.name]: e.target.value})
    }

    const handleEditListing = (e) => {
        e.preventDefault()
        fetch(`/listings/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(editListing),
            
        })
        .then(response => {
            if(response.status ===202) {
                response.json()
                .then(listing => {

                    setListings(currentListings => {
                        const updatedListings = currentListings.map(lis =>{
                            return lis.id === id ? listing : lis
                        })
                        return updatedListings
                    })
                    handleClick()
                })
            } else {
                response.json()
                .then(error => alert(error.error))
            }
        })
        .catch(error => alert(error))

    }

    return(
        <form className="form" onSubmit={handleEditListing}>
            <input className="user-input" placeholder="Title" type="text" name="title" value={editListing.title} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Plant Name" type="text" name="plant_name" value={editListing.plant_name} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Description" type="text" name="description" value={editListing.description} onChange={handleChange} /> <br/>
            <input className="user-input" placeholder="City" type="text" name="city" value={editListing.city} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="State" type="text" name="state" value={editListing.state} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Zip Code" type="text" name="zipcode" value={editListing.zipcode} onChange={handleChange} /> <br/>  
            <input className="user-input" placeholder="Image" type="text" name="image" value={editListing.image} onChange={handleChange} /> <br/> 
            <input className="lis-btn" type="submit" value="Update Listing" />
        </form>
    )
}

export default ListingEditForm;