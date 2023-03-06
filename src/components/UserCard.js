import React from "react";
import { useState } from "react";
import UserEditForm from "./UserEditForm";
import { Link } from "react-router-dom";



const UserCard = ( { id, username, email, city, state, zipcode, setCurrentUser, currentUser }) => {

    const [userForm, setUserForm] = useState(false)


    const handleUserClick = () => {
        setUserForm(currentValue => !currentValue)
    }


    const handleDeleteUser = () => {
        fetch(`/users/${id}`,
        {
            method: "DELETE"
        })
        .then(() => setCurrentUser(currentUser => currentUser.filter(element => element.id !== id)))
    }


    return (

        <div className="user-box">
            {userForm ? <UserEditForm id={id} username={username} email={email} city={city} state={state} zipcode={zipcode} handleUserClick={handleUserClick} handleDeleteUser={handleDeleteUser} setCurrentUser={setCurrentUser} currentUser={currentUser}/>:(
                <div className="user-card">
                <strong>Username: </strong>{currentUser.username}<br/>
                <strong>Email: </strong>{currentUser.email} <br/>
                {/* <strong>Password: </strong>{currentUser.password} <br/> */}
                <strong>City: </strong>{currentUser.city} <br/>
                <strong>State: </strong>{currentUser.state} <br/>
                <strong>Zipcode: </strong>{currentUser.zipcode} <br/>
                    <button className="form-btn" onClick={handleUserClick}>
                        EDIT ACCOUNT 
                    </button>
                    <button className="form-btn" onClick={handleDeleteUser}> 
                        DELETE ACCOUNT
                    </button> <br/>
                    <Link className="user-listing-link" to="/listings/mylistings">My Listings</Link> <br/>
                  
                </div>
        )}
        </div>


        // <>
        //     <div className="user-box">
        //         <p>{id} </p>
        //         <p className="username-input"><u>Username:</u> {username}</p>
        //         <p className="email-input"><u>Email:</u> {email}</p>
        //         <p className="password-input"><u>Password:</u> {password}</p>
        //         <p className="city-input"><u>City:</u> {city}</p>
        //         <p className="state-input"><u>State:</u> {state}</p>
        //         <p className="zipcode-input"><u>Zip Code:</u> {zipcode}</p>
        //         {/* <img className="image" src={image} alt={""}></img> */}
        //     </div>
        // </>
    )

}

export default UserCard;