import React from "react";
import UserListingsCard from "./UserListingsCard"

const UserListingsContainer = ({listings, setListings, user, user_id}) => {

    // const filteredListings = userListings.filter(userListing => userListing.user.id === users.id)
    
    const mappedListings = listings.map(listing => (
        <UserListingsCard {...listing} key={user_id} setListings={setListings} />));

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

export default UserListingsContainer;