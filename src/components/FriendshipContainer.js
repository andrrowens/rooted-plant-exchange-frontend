import React from 'react'
// import { useState } from 'react'
import FriendshipCard from './FriendshipCard'

const FriendshipContainer = ( {friendships, setFriendships }) => {

    const mappedFriendships = friendships.map(friendship => (
        <FriendshipCard {...friendship} key={friendship.id} setFriendships={setFriendships} />));

    // const pendingFriendships = friendships.filter(friendship => friendship.status === "pending")

    // const acceptedFriendships = friendships.filter(friendship => friendship.status === "accepted")

    // const acceptedFriendships = [
    //     { sender_id: "" },
    //     { receiver_id: "" },
    //     { status: "" }
    // ]


  return (

    <div>
        <h2 className="friendship-header">Your Friendships</h2>
            <div>




                <h2> PENDING</h2>

                {mappedFriendships}

                {/* <div>
                    {acceptedFriendships.map((item, id) => (
                        <div key={id}>{item.sender_id} {item.receiver_id} {item.status} </div>))}
                
                </div> */}

              

                {/* {pendingFriendships} */}
                <h2> ACCEPTED</h2>
                {/* <div key={friendships.id}>{acceptedFriendships} </div> */}
            </div>
    </div>   
    )
}
export default FriendshipContainer 
