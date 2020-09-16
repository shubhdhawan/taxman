import React from 'react'
import './NavigationBar.css'
import logo from './Assets/logo_Taxmann--Tax-&-CL-of-India-for-Web_Sept18.svg'
import research from './Assets/Reserach.svg'
import profile from './Assets/Profile.svg'
import cart from './Assets/Cart.svg'
import notification from './Assets/Notification.svg'
function NavigationBar()
{      
 return(
<div>

 <div className="nav-container">
     <img className="nav-heading" src={logo}></img>
     <p className="nav-heading2">Bookstore</p>
     <input type="text" placeholder="Search anything on tax and coporate law in bookstore" className="nav-searchbar"></input>
     <div className="circle" style={{ background: '#25C16F'}}>R</div>
     <div className="nav-line"></div>
     <div className="circle"style={{ background: '#CC4783'}}>E</div>
     <div className="nav-line"></div>
     <div className="circle"style={{ background: '#8847CC'}}>C</div>
     <div className="nav-line"></div>
     <div className="arrow-down">V</div>
     <button className="nav-btn">Bookstore</button>
     <img className="nav-icons" src={research}></img>
     <img className="nav-icons" src={notification}></img>
     <img className="nav-icons" src={profile}></img>
     <img className="nav-icons" src={cart}></img>
     <div className="nav-menu">
       <div className="lines"></div>
       <div className="lines"></div>
       <div className="lines"></div>
     </div>
 </div>
</div>       
 )   
}

export default NavigationBar