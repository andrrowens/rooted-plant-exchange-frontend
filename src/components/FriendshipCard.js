import React from 'react'
import { useState } from "react";
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const FriendshipCard = ( { id, sender_id, receiver_id, status, setFriendships }) => {

    const {setUser} = useContext(UserContext)

    const [editFriendship, setEditFriendship] = useState({
        status: status,
    })

    const isFriendshipApproved = (status) => {
    if(status === 'accepted') {
        return true
    } else {
        return false
    }
    }
    

    
    const handleDeleteFriendship = () => {
        fetch(`/friendships/${id}`,
        {
            method: "DELETE"
        })
        .then((res) => {
            if(res.status ===202) {
                res.json()
                .then(user => setUser(user))
            }
        })
    }


    const handleApproveFriendship = (e) => {
        fetch(`/friendships/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(editFriendship),
            
        })
        .then(response => {
            if(response.status ===202) {
                response.json()
                .then(user => {

                    setUser(user)
                })
            } else {
                response.json()
                .then(error => alert(error.error))
            }
        })
        .catch(error => alert(error))
    }



    return (
        <>
            <div className="plant-box">
                {/* <p>{id} </p> */}
                <p className="friendship-sender"><u>Sender:</u> {sender_id}</p>
                <p className="friendship-receiver"><u>Receiver:</u> {receiver_id}</p>
                <p className="friendship-status"><u>Status:</u> {status}</p>
                {/* <button className="delete-friendship" onClick={handleDeleteFriendship}> REJECT REQUEST &#10006; </button> <br/> */}

                {/* <button className="delete-friendship" onClick={handleDeleteFriendship}> REJECT REQUEST &#10006; </button> <br/> */}


        
                <div>
                    {isFriendshipApproved ? <button onClick={handleDeleteFriendship}>DELETE REQUEST</button> : null}
                    {isFriendshipApproved ? <button onClick={handleApproveFriendship}>ACCEPT REQUEST</button> : null}
                </div>

                {/* <div>
                    {isFriendshipApproved ? <button onClick={handleApproveFriendship}>ACCEPT REQUEST</button> : null}
                </div> */}



                {/* <button className="delete-friendship" onClick={handleApproveFriendship}> APPROVE REQUEST &#10006; </button> */}

            </div>
        </>
    )
}
export default FriendshipCard