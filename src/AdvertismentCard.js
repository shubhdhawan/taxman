import React from 'react'
import  './AdvertismentCard.css'
import image1 from './Assets/image1.png'
import image2 from './Assets/image2.png'

function AdvertismentCard(props)
{
    return(
        <div>
            <img src={props.image} className="scard-img"></img>
            <div className="scard-info">
    <h2 className="scard-heading">{props.heading}</h2>
    <p className="scard-detail">{props.detail}</p>
                <a href="" className="scard-link">Know more</a>
            </div>

        </div>
    )
}

export default AdvertismentCard