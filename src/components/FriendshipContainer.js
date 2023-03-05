import React from 'react'
// import { useState } from 'react'
import FriendshipCard from './FriendshipCard'

const FriendshipContainer = ( {friendships, setFriendships }) => {

    const mappedFriendships = friendships.map(friendship => (
        <FriendshipCard {...friendship} key={friendship.id} setFriendships={setFriendships} />));

    // const pendingFriendships = friendships.filter(friendship => friendship.status === "pending")

    // const acceptedFriendships = friendships.filter(friendship => friendship.status === "accepted")




    

  return (

    <div>
        <h2 className="friendship-header">Your Friendships</h2>
            <div>
                <h2> PENDING</h2>




                {mappedFriendships}
                {/* <div key={friendships.id}>{pendingFriendships} </div> */}
                <h2> ACCEPTED</h2>
                {/* <div key={friendships.id}>{acceptedFriendships} </div> */}
            </div>
    </div>   
    )
}
export default FriendshipContainer 
