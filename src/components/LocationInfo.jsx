import React from 'react'
import '../styles/locationInfo.css'

const LocationInfo = ({ location }) => {
    return (
        <div className='card__info' >
            
            <ul className='card__info__ul' >
                <li className='card__info-list' ><h2 className='card__info-name' > <span>Name:</span> {location?.name}</h2></li>
                <li className='card__info-list' > <span>Type:</span> {location?.type}</li>
                <li className='card__info-list' > <span>Dimension:</span> {location?.dimension}</li>
                <li className='card__info-list' > <span>Population:</span> {location?.residents.length}</li>
            </ul>
        </div>
    )
}

export default LocationInfo