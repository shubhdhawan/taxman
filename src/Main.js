import React from 'react'
import './Main.css'
import NavigationBar from './NavigationBar.js'
import PurchaseCard from './PurchaseCard.js'
import MainCard from './MainCard'
import book2 from './Assets/vol2L.png'
import book3 from './Assets/Bitmap.png'
import featured from './Assets/Group 2 Copy 21.png'
import book1 from './Assets/book1.png'

function Main()
{   
    return(
     <div  style={{display:'flex', flexDirection:"column"}}>
      <div className="tab">Bookstore H... <p className="close">X</p></div>
        <div className="main-uppersection">
           <button className="round-btn1">&#60;</button>
            <MainCard />
            <button className="round-btn2">&#62;</button> 
        </div>
       
        <div className="main-lowersection">
            <div className="main-section">
             <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h2 className="main-heading">Recommended for you<p className="arrowdown">&#60;</p></h2>
                <a href="#" className="main-link">View all</a>
            </div>
              <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',}}>
                <PurchaseCard image={book1} banner={featured} bookname="Income Tax Rules with Master 
                 Guide To Income Tax Rules" author="Aditya Gadge,  Biharilal Deora" price="Rs. 345" /> 
                 <PurchaseCard image={book2}  bookname="Central Excise Manual (Vol 2) 
                  (Set of 3 Books) " author="Amitabha Mukherjee " price="Rs. 1,799" /> 
                   <PurchaseCard image={book3} banner={featured} bookname="Central Excise Manual (Vol 2) 
                  (Set of 3 Books) " author="Amitabha Mukherjee " price="Rs. 1,799" /> 
                   <PurchaseCard image={book2}  bookname="Central Excise Manual (Vol 2) 
                  (Set of 3 Books) " author="Amitabha Mukherjee " price="Rs. 1,799" /> 
                   <PurchaseCard image={book3}  bookname="Income Tax Rules with Master 
                 Guide To Income Tax Rules" author="Aditya Gadge,  Biharilal Deora" price="Rs. 345" /> 
                   <PurchaseCard image={book2} banner={featured} bookname="Central Excise Manual (Vol 2) 
                  (Set of 3 Books) " author="Amitabha Mukherjee " price="Rs. 1,799" /> 
                 </div>
            </div>
            <div className="divider"></div>
            <div className="main-section">
             <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h2 className="main-heading">New Releases<p className="arrowdown">&#60;</p></h2>
                <a href="#" className="main-link">View all</a>
             </div>
            <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',}}>
                <PurchaseCard image={book1} banner={featured} bookname="Income Tax Rules with Master 
                 Guide To Income Tax Rules" author="Aditya Gadge,  Biharilal Deora" price="Rs. 345" /> 
                 <PurchaseCard image={book2}  bookname="Central Excise Manual (Vol 2) 
                  (Set of 3 Books) " author="Amitabha Mukherjee " price="Rs. 1,799" /> 
                   <PurchaseCard image={book3} banner={featured} bookname="Central Excise Manual (Vol 2) 
                  (Set of 3 Books) " author="Amitabha Mukherjee " price="Rs. 1,799" /> 
                   <PurchaseCard image={book2}  bookname="Central Excise Manual (Vol 2) 
                  (Set of 3 Books) " author="Amitabha Mukherjee " price="Rs. 1,799" /> 
                   <PurchaseCard image={book3}  bookname="Income Tax Rules with Master 
                 Guide To Income Tax Rules" author="Aditya Gadge,  Biharilal Deora" price="Rs. 345" /> 
                   <PurchaseCard image={book2} banner={featured} bookname="Central Excise Manual (Vol 2) 
                  (Set of 3 Books) " author="Amitabha Mukherjee " price="Rs. 1,799" /> 
            </div>
            
        </div>
      </div>
    </div>

    )
}

export default Main