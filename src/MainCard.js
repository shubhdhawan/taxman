import React from 'react'
import './MainCard.css'
import image3 from './Assets/image3.png'

 function MainCard()
 {
     return(
         <div>
         <img src={image3} className="image"></img>
         <div className="card-content">
             <h1 className="heading1">Subscription 2019</h1>
             <h2 className="heading2">Boost your Practice</h2>
             <p className="info">An all encompassing , authentic and update plateform</p>
             <button className="btn">Know More</button>
         </div>
         </div>
     )
   }

 export default MainCard