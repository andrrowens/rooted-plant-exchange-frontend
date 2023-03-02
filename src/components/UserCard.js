import React from "react";
import { useState } from "react";
import UserEditForm from "./ListingEditForm";



const UserCard = ( { id, username, email, password, city, state, zipcode, setUsers }) => {

    const [userForm, setUserForm] = useState(false)


    const handleUserClick = () => {
        setUserForm(currentValue => !currentValue)
    }


    const handleDeleteUser = () => {
        fetch(`/users/${id}`,
        {
            method: "DELETE"
        })
        .then(() => setUsers(currentListings => currentListings.filter(element => element.id !== id)))
    }


    return (

        <div className="user-box">
            {userForm ? <UserEditForm id={id} username={username} email={email} password={password} city={city} state={state} zipcode={zipcode} handleUserClick={handleUserClick} handleDeleteUser={handleDeleteUser}/>:(
                <div className="user-card">
                <strong>Username: </strong>{username} <br/>
                <strong>Email: </strong>{email} <br/>
                <strong>Password: </strong>{password} <br/>
                <strong>City: </strong>{city} <br/>
                <strong>State: </strong>{state} <br/>
                <strong>Zipcode: </strong>{zipcode} <br/>
                    <button className="form-btn" onClick={handleUserClick}>
                        EDIT ACCOUNT 
                    </button>
                    <button className="form-btn" onClick={handleDeleteUser}> 
                        DELETE ACCOUNT
                    </button>
                  
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