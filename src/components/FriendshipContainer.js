import React from 'react'
// import { useState } from 'react'
import FriendshipCard from './FriendshipCard'

const FriendshipContainer = ( {friendships, setFriendships }) => {

    const mappedFriendships = friendships.map(friendship => (
        <FriendshipCard {...friendship} key={friendship.id} setFriendships={setFriendships} />));
        

  return (

    <div>
        <h2 className="friendship-header">Your Friendships</h2>
            <div>
                <h2> PENDING</h2>
                {mappedFriendships}
                <h2> APPROVED</h2>
            </div>
    </div>   
    )
}
export default FriendshipContainer 
