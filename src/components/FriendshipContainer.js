import React from 'react'
// import { useState } from 'react'
import FriendshipCard from './FriendshipCard'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const FriendshipContainer = ( {friendships, setFriendships }) => {

    const {user} = useContext(UserContext)

    // const mappedPendingFriendships = user.pending_received_friendship_requests.map(friendship => (
    //     <FriendshipCard {...friendship} key={friendship.id} setFriendships={setFriendships} />));

    // const mappedApprovedFriendships = user.approved_received_friendship_requests.map(friendship => (
    //         <FriendshipCard {...friendship} key={friendship.id} setFriendships={setFriendships} />));

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

                {/* {mappedPendingFriendships} */}

                {/* {mappedApprovedFriendships} */}


              
                <h2> ACCEPTED</h2>

            </div>
    </div>   
    )
}
export default FriendshipContainer 
