import React from 'react'
import './App.css'
import NavigationBar from './NavigationBar.js'
import PurchaseCard from './PurchaseCard.js'
import AdvertismentCard from './AdvertismentCard.js'
import MainCard from './MainCard'
import Footer from './Footer'
import book2 from './Assets/vol2L.png'
import book3 from './Assets/Bitmap.png'
import featured from './Assets/Group 2 Copy 21.png'
import book1 from './Assets/book1.png'
import image1 from './Assets/image1.png'
import image2 from './Assets/image2.png'
import SideNav from './SideNav'
import Main from './Main'
import truck from './Assets/Orion_truck.svg'
import box from './Assets/Orion_archive-box.svg'
import payment from './Assets/Orion_secure-payment (1).svg'

function App()
{
    return(
        
        <div style={{  position: 'absolute', left: '0px', width: '100%', overflow: 'hidden', backgroundColor:'#EAECF0',}}>
            
            <NavigationBar />
        <div style={{display:'flex', flexDirection:"row", width:'100%', height:'100%'}}>
            <div style={{width:'',  backgroundColor:"white", height:"1250px"}}>
                  <SideNav />
               </div>
               
            <div style={{width:'80%',height:'50%', marginTop:'40px', backgroundColor:"white"}}>
                         <Main />
                       </div>
                    
                    
                <div style={{width:'20%',height:'50%'}}>
                        <div className="rightside-card">
                            <img src={truck} className="row"></img>
                            <div className="rightside-card-content">
                                <h4 className="rightside-card-heading">Quick Delivery</h4>
                                <p className="rightside-card-detail">FedEx courier in most of the Cities</p>
                            </div>
                            <img src={box} className="row"></img>
                            <div className="rightside-card-content">
                                <h4 className="rightside-card-heading">Free Shipping</h4>
                                <p className="rightside-card-detail">Accorss India on order above Rs 350</p>
                            </div>
                            <img src={payment} className="row"></img>
                            <div className="rightside-card-content">
                                <h4 className="rightside-card-heading">Secured Payment</h4>
                                <p className="rightside-card-detail">Taxmann provides secure service</p>
                            </div>
                        </div>
                    
                        <div style={{paddingTop:"20px",paddingLeft:"20px" ,paddingRight: '20px'}}>
                        <div className="offers">Offers</div>
                        <AdvertismentCard image={image1} heading="Super deal of a lifetime"
                         detail="Get 2 modules at a price of 1 module."/>
                        <AdvertismentCard image={image2} heading="Books under Rs 599 only"
                         detail="5000+ books on Income Tax and Corporate Tax"/>
                        <AdvertismentCard image={image1} heading="Super deal of a lifetime"
                         detail="Get 2 modules at a priceof 1 module."/>
                        <AdvertismentCard image={image2} heading="Books under Rs 599 only" 
                        detail="5000+ books on Income Tax and Corporate Tax"/>
                     </div>
                </div>
                    
        </div>
        <Footer />
                       
                     
    </div>
        

    )
}

export default App