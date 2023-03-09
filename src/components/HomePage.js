import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
        <div className="home-header">
            <h1 className="home-header">Welcome to Root Plant Exchange</h1>
                <h2 className="home-subheader">Connecting Gardners, Growers and Greenthumbs Since 2023</h2>
        </div>
        <div className="home-body">
            <Link className="listings-link" to="/listings">View Listings</Link> <br/>
            <Link className="listings-link" to="/plant_library">View Plant Library</Link> <br/>
            <Link className="listings-link" to="/user_plants">View User Plant Submissions</Link> <br/> <br/>
            <Link className="account-link" to="/account">My Account</Link>
        </div>
    </div>
  )
}

export default HomePage 