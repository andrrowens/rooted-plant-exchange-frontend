import React from "react";




const UserCard = ( { id, username, email, password, city, state, zipcode }) => {



    return (
        <>
            <div className="user-box">
                <p>{id} </p>
                <p className="username-input"><u>Username:</u> {username}</p>
                <p className="email-input"><u>Email:</u> {email}</p>
                <p className="password-input"><u>Password:</u> {password}</p>
                <p className="city-input"><u>City:</u> {city}</p>
                <p className="state-input"><u>State:</u> {state}</p>
                <p className="zipcode-input"><u>Zip Code:</u> {zipcode}</p>
                {/* <img className="image" src={image} alt={""}></img> */}
            </div>
        </>
    )

}

export default UserCard;