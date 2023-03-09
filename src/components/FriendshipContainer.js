import React from 'react'
// import { useState } from 'react'
import FriendshipCard from './FriendshipCard'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const FriendshipContainer = ( {friendships, setFriendships }) => {

    const {user} = useContext(UserContext)

    const mappedPendingFriendships = user.pending_received_friendship_requests.map(friendship => (
        <FriendshipCard {...friendship} key={friendship.id} setFriendships={setFriendships} />));

    const mappedAcceptedFriendships = user.accepted_received_friendship_requests.map(friendship => (
            <FriendshipCard {...friendship} key={friendship.id} setFriendships={setFriendships} />));

    // const mappedFriendships = friendships.map(friendship => (
    //     <FriendshipCard {...friendship} key={friendship.id} setFriendships={setFriendships} />));




    // const pendingFriendships = friendships.filter(friendship => friendship.status === "pending")

    // const acceptedFriendships = friendships.filter(friendship => friendship.status === "accepted")

  

  return (

    <div>
            <div>




                <h2> Pending Friendship Requests</h2>

                {/* {mappedFriendships} */}

                {mappedPendingFriendships}

          


              
                <h2> Friends </h2>

                {mappedAcceptedFriendships}

            </div>
    </div>   
    )
}
export default FriendshipContainer 
