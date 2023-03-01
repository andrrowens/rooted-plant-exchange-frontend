import React from 'react'

const FriendshipCard = ( { id, sender_id, receiver_id, status }) => {

    return (
        <>
            <div className="plant-box">
                <p>{id} </p>
                <p className="friendship-sender"><u>Sender:</u> {sender_id}</p>
                <p className="friendship-receiver"><u>Receiver:</u> {receiver_id}</p>
                <p className="friendship-status"><u>Status:</u> {status}</p>
                

            </div>
        </>
    )
}
export default FriendshipCard
