import React from 'react'
import { useState } from "react";
import ListingEditForm from "./ListingEditForm";
import { Link } from "react-router-dom";

const ListingsCard = ({id, title, plant_name, description, city, state, zipcode, image, user_id, plant_id, sender_id, receiver_id, status, setListings, setFriendships}) => {

  

    const [showForm, setShowForm] = useState(false)

    const [newFriendship, setNewFriendship] = useState({
        receiver_id: ""
})


    const handleClick = () => {
        setShowForm(currentValue => !currentValue)
    }


    const handleAddFriendship = (e) => {
            // fetch(`/friendships/${id}`, {   // returning 404
                fetch("/friendships", {    //returning 422
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({receiver_id: user_id})
            })
            .then(response => {
                console.log("fetch")
                if(response.status===201){
                    response.json()
                    .then(friendship => {
                        console.log(friendship)
                        setFriendships(currentFriendships => [...currentFriendships, friendship])
                        setNewFriendship({         
                            sender_id: "",
                            receiver_id: "",
                            status: ""  

                            // sender_id: sender_id,
                            // receiver_id: receiver_id,
                            // status: status  
                        })
                    } )
                } else {
                    response.json()
                    .then(errorObj => setNewFriendship(errorObj.error))
                }    
            })
            .catch(error => alert(error))
    }

    const handleDeleteListing = () => {
        fetch(`/listings/${id}`,
        {
            method: "DELETE"
        })
        .then(() => setListings(currentListings => currentListings.filter(element => element.id !== id)))
    }


    return(
            <div className="listing-box">
                {showForm ? <ListingEditForm id={id} title={title} plant_name={plant_name} description={description} city={city} state={state} zipcode={zipcode} image={image} user_id={user_id} plant_id={plant_id} setListings={setListings} setNewFriendship={setNewFriendship} handleClick={handleClick} handleDeleteListing={handleDeleteListing} handleAddFriendship={handleAddFriendship} />:(
                    <div className="listing-card">
                     <strong>Title: </strong>{title} <br/>
                     <strong>Plant Name: </strong>{plant_name} <br/>
                     <strong>Description: </strong>{description} <br/>
                     <img className="listing-image" src={image} alt={plant_name}></img> <br/>

                     <strong>City: </strong>{city} <br/>
                     <strong>State: </strong>{state} <br/>
                     <strong>Zipcode: </strong>{zipcode} <br/>
                     <strong>Poster's Username: </strong>{user_id} <br/>
                     <button className="form-btn" onClick={handleAddFriendship}>
                                ADD FRIEND 
                            </button> <br/>

                    <Link className="plant-link" to="/plant_library">Learn More About This Plant</Link> <br/>
                    {/* <Link className="plant-link" to=`/plant_library/${plant_id}`>Learn More About This Plant</Link> */}

                            <button className="form-btn" onClick={handleDeleteListing}> 
                                DELETE LISTING 
                            </button>
                            <button className="form-btn" onClick={handleClick}>
                                EDIT LISTING
                            </button>
                      
                    </div>
                )}
            </div>
    )
}; 



export default ListingsCard;