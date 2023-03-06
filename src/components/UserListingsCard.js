import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const UserListingCard = ({id, title, plant_name, description, city, state, zipcode, image, user_id }) => {





    return(
            <div className="user-listing-box">
                    <div className="user-listing-card">
                     <strong>Title: </strong>{title} <br/>
                     <strong>Plant Name: </strong>{plant_name} <br/>
                     <strong>Description: </strong>{description} <br/>
                     <strong>City: </strong>{city} <br/>
                     <strong>State: </strong>{state} <br/>
                     <strong>Zipcode: </strong>{zipcode} <br/>
                     <strong>Poster's Username: </strong>{user_id} <br/>
                     
                     <Link className="plant-link" to="/plant_library">Learn More About This Plant</Link>
                    </div>  
            </div>
    )
}; 



export default UserListingCard;