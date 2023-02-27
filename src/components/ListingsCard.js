import React from 'react'
import { useState } from "react";
import ListingEditForm from "./ListingEditForm";

const ListingsCard = ({id, title, plant_name, description, city, state, zipcode, image, setListings}) => {


    const [showForm, setShowForm] = useState(false)


    const handleClick = () => {
        setShowForm(currentValue => !currentValue)
    }

    const handleDeleteReview = () => {
        fetch(`/listings/${id}`,
        {
            method: "DELETE"
        })
        .then(() => setListings(currentListings => currentListings.filter(element => element.id !== id)))
    }


    return(
            <div className="listing-box">
                {showForm ? <ListingEditForm id={id} title={title} plant_name={plant_name} description={description} city={city} state={state} zipcode={zipcode} image={image} setListings={setListings} handleClick={handleClick} />:(
                    <div className="listing-card">
                     <strong>Title: </strong>{title} <br/>
                     <strong>Plant Name: </strong>{plant_name} <br/>
                     <strong>Description: </strong>{description} <br/>
                     <strong>City: </strong>{city} <br/>
                     <strong>State: </strong>{state} <br/>
                     <strong>Zipcode: </strong>{zipcode} <br/>
                     {/* <strong>Image: </strong>{image} <br/> */}
                     <img className="campsite-image" src={image} alt={""}/> <br/>
                            <button className="form-btn" onClick={handleDeleteReview}> 
                                DELETE &#10006;
                            </button>
                            <button className="form-btn" onClick={handleClick}>
                                EDIT &#9999;
                            </button>  
                    </div>
                )}
            </div>
    )
}; 



export default ListingsCard;