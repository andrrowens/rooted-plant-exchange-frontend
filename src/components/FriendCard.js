import React from 'react'
import { useState } from "react";
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const FriendCard = ( { friend }) => {

    const {setUser} = useContext(UserContext)

    
    const handleDeleteFriendship = (friendId) => {
        fetch(`/friendships/remove?friend_id=${friendId}`,
        {
            method: "DELETE"
        })
        .then((res) => {
            if(res.status ===200) {
                res.json()
                .then(user => setUser(user))
            }
        })
    }

    return (
        <>
            <div className="plant-box">
                {/* <p>{id} </p> */}
                <p className="friendship-info"><strong>Username</strong> {friend.username}</p>
            
                {/* <button className="delete-friendship" onClick={handleDeleteFriendship}> REJECT REQUEST &#10006; </button> <br/> */}

                {/* <button className="delete-friendship" onClick={handleDeleteFriendship}> REJECT REQUEST &#10006; </button> <br/> */}


        
                <div>
                   <button className="friends-btn" onClick={() => handleDeleteFriendship(friend.id)}>DELETE REQUEST</button>
                    {/* {isFriendshipApproved ? <button className="friends-btn" onClick={handleApproveFriendship}>ACCEPT REQUEST</button> : null} */}
                </div>

                {/* <div>
                    {isFriendshipApproved ? <button onClick={handleApproveFriendship}>ACCEPT REQUEST</button> : null}
                </div> */}



                {/* <button className="delete-friendship" onClick={handleApproveFriendship}> APPROVE REQUEST &#10006; </button> */}

            </div>
        </>
    )
}
export default FriendCard