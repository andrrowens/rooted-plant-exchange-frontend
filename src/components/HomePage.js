import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
        <div className="home-header"> <br/>
            <h1 className="home-header">Welcome to Rooted Plant Exchange</h1>
                <h2 className="home-sub-header">Connecting Gardeners, Growers and Greenthumbs Since 2023</h2>
        </div>
        <div className="home-body">
            <Link className="homepage-link" to="/listings">View Listings</Link> <br/>
            <Link className="homepage-link" to="/plant_library">View Plant Library</Link> <br/>
            <Link className="homepage-link" to="/user_plants">View User Plant Submissions</Link> <br/> <br/>
            <Link className="homepage-link" to="/account">My Account</Link> <br/>
        </div>
    </div>
  )
}

export default HomePage 