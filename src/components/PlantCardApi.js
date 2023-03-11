import React from 'react'

const PlantCardApi = ( { id, common_name, scientific_name, cycle, watering, sunlight, default_image }) => {

    return (
        <>
            <div className="plant-box">
                {/* <p> {id} </p> */}
                <p className="api-input"><u>Common Name:</u> {common_name}</p>
                <p className="api-input"><u>Scientific Name:</u> {scientific_name}</p>
                <p className="api-input"><u>Grow Cycle:</u> {cycle}</p>
                <p className="api-input"><u>Watering Requirements:</u> {watering}</p>
                <p className="api-input"><u>Sunlight Requirements:</u> {sunlight}</p>
                <img className="plant-image" src={default_image?.original_url} alt={""}></img>
            </div>
        </>
    )

}

export default PlantCardApi