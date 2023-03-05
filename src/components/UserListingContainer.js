import React from "react";
import UserListingCard from "./UserListingCard"

const UserListingContainer = ({userListings, setUserListings, users}) => {

    // const filteredListings = userListings.filter(userListing => userListing.user.id === users.id)
    
    const mappedListings = userListings.map(userListing => (
        <UserListingCard {...userListing} key={users.id} setUserListings={setUserListings} />));

    return(
    <>
        <div>
        <h2 className="listing-header">My Listings</h2>
            <div> 
                {mappedListings}
                {/* {filteredListings} */}
            </div>
        </div> 
    </>

    
        // <div className="listing-container">
        //     { mappedListing}
        // </div>
    )
}; 

export default UserListingContainer;