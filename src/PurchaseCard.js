import React from 'react'
import './PurchaseCard.css'
import book1 from './Assets/book1.png'
import star from  './Assets/Star.svg'
import nstar from './Assets/Starnotmarked.svg'
import book2 from './Assets/vol2L.png'
import book3 from './Assets/Bitmap.png'
import featured from './Assets/Group 2 Copy 21.png'

function PurchaseCard(props)
{
    return(
      
        <div style={{height:'503px', marginBottom:'50px'}}>
              
        <img src={props.image} className="card-img"></img>
        <img src={props.banner} className="card-category"></img>
    <h2 className="card-heading">{props.bookname}</h2>
    <p className="card-author">{props.author}</p>
    <p className="card-price">{props.price}</p>
    <div className="card-rating">
        <img src={star} ></img>
        <img src={star} ></img>
        <img src={star} ></img>
        <img src={star} ></img>
        <img src={nstar} ></img>
    </div><br></br>
        <button className="card-btn">Add To Cart</button> < button className="card-btn2">Buy Now</button>

        </div>
    )
}

export default PurchaseCard