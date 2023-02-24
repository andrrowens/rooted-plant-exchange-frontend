import React from 'react'

const PlantCard = ( { id, common_name, scientific_name, cycle, watering, sunlight, image }) => {

    return (
        <>
            <div className="plant-box">
                <p>{id} </p>
                <p className="common-name"><u>Common Name:</u> {common_name}</p>
                <p className="scientific-name"><u>Scientific Name:</u> {scientific_name}</p>
                <p className="cycle"><u>Grow Cycle:</u> {cycle}</p>
                <p className="watering"><u>Watering Requirements:</u> {watering}</p>
                <p className="sunlight"><u>Sunlight Requirements:</u> {sunlight}</p>
                <img className="plant-image" src={image} alt={""}></img>
            </div>
        </>
    )

}

export default PlantCard