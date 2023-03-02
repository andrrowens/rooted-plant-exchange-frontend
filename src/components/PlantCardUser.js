import React from 'react'

const PlantCardUser = ( { id, name, watering, sunlight, environment, notes, image }) => {

    return (
        <>
            <div className="plant-box">
                <p>{id} </p>
                <p className="common-name"><u>Plant Name:</u> {name}</p>
                <p className="watering"><u>Watering Notes:</u> {watering}</p>
                <p className="sunlight"><u>Sunlight Notes:</u> {sunlight}</p>
                <p className="environment"><u>Environment Notes:</u> {environment}</p>
                <p className="environment"><u>Other Notes:</u> {notes}</p>
                <img className="plant-image" src={image} alt={""}></img>
            </div>
        </>
    )

}

export default PlantCardUser