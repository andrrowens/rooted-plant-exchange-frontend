import React from 'react'

const FriendshipCard = ( { id, sender_id, receiver_id, status, setFriendships }) => {


    const handleDeleteFriendship = () => {
        fetch(`/friendships/${id}`,
        {
            method: "DELETE"
        })
        .then(() => setFriendships(currentFriendships => currentFriendships.filter(element => element.id !== id)))
    }

    const handleApproveFriendship = () => {
        
    }

    return (
        <>
            <div className="plant-box">
                <p>{id} </p>
                <p className="friendship-sender"><u>Sender:</u> {sender_id}</p>
                <p className="friendship-receiver"><u>Receiver:</u> {receiver_id}</p>
                <p className="friendship-status"><u>Status:</u> {status}</p>
                <button className="delete-friendship" onClick={handleDeleteFriendship}> REJECT REQUEST &#10006; </button> <br/>
                <button className="delete-friendship" onClick={handleApproveFriendship}> APPROVE REQUEST &#10006; </button>

            </div>
        </>
    )
}
export default FriendshipCard
