import React from "react";
import ListingsCard from "./ListingsCard";



const ListingsContainer = ({listings, setListings}) => {

    const mappedListings = listings.map(listing => (
        <ListingsCard {...listing} key={listing.id} setListings={setListings} /> ))
    

    return(
    <>
        <div>
        <h2 className="campsite-header">Listings</h2>
            <div> 
                {mappedListings}
            </div>
        </div> 
    </>

    
        // <div className="listing-container">
        //     { mappedListing}
        // </div>
    )
}; 

export default ListingsContainer;