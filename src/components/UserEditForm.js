import React from "react"
import { useState } from "react";

const UserEditForm = ({ id, username, email, password, city, state, zipcode, setUsers, handleClick}) => {

    const [editUser, setEditUser] = useState({
        username: username,
        email: email,
        password: password,
        city: city,
        state: state,
        zipcode: zipcode
    });

    const handleChange = (e) => {
        setEditUser({...editUser, [e.target.name]: e.target.value})
    }

    const handleEditUser = (e) => {
        e.preventDefault()
        fetch(`/user/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(editUser),
            
        })
        .then(response => {
            if(response.status ===202) {
                response.json()
                .then(user => {

                    setUsers(currentUser => {
                        const updatedUser = currentUser.map(userapp =>{
                            return userapp.id === id ? user : userapp
                        })
                        return updatedUser
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
        <form className="user-form" onSubmit={handleEditUser}>
            <input className="user-input" placeholder="Username" type="text" name="username" value={editUser.username} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Email" type="text" name="email" value={editUser.email} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="City" type="text" name="city" value={editUser.city} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="State" type="text" name="state" value={editUser.state} onChange={handleChange} /> <br/> 
            <input className="user-input" placeholder="Zip Code" type="text" name="zipcode" value={editUser.zipcode} onChange={handleChange} /> <br/> 
            <input className="rev-btn" type="submit" value="Update Profile" />
        </form>
    )
}

export default UserEditForm;