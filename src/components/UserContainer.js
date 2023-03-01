import React from "react";
import UserCard from "./UserCard";



const UserContainer = ({users, setUsers}) => {

    const mappedUsers = users.map(user => (
        <UserCard {...user} key={user.id} setUsers={setUsers} /> ))
    

    return(
    <>
        <div>
        <h2 className="user-header">My Profile</h2>
            <div> 
                {mappedUsers}
            </div>
        </div> 
    </> 
    )
};

export default UserContainer;