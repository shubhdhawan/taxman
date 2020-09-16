import React from 'react'
import './Footer.css'
import facebook from './Assets/Facebook.svg'
import logo from './Assets/logo_Taxmann--Tax-&-CL-of-India-for-Web_Sept18 (1).svg'
import appstore from './Assets/app-store.png'
import playstore from './Assets/google-play-badge (1).png'
import twitter from './Assets/Twitter.svg'
import youtube from './Assets/Combined Shape.svg'
import linkdin from './Assets/Linkedin.svg'

function Footer()
{
    return(
        <div className="f-container">
          <div className="f-box">
            <div className="col">
             
             <img src={logo} className="f-logo" ></img> 
             <p className="f-detail">Everything you need on Income Tax, GST and Corporate Laws.
             Authentic databases, books, journals, Practice and Exam platforms</p>
             <div>
             <img src={playstore} className="store"></img>
             <img src={appstore} className="store"></img>
             </div>
             <div>
             <img src={facebook} className="icon"></img>
             <img src={twitter} className="icon"></img>
             <img src={linkdin} className="icon"></img>
             <img src={youtube} className="icon"></img>
             </div>
             <p className="copyright">© 2019 Taxmann.com. All rights reserved.</p>

            </div>
            <div className="col">

                <h2 className="heading">Products</h2>
                <a className="link" href="#">Research</a>
                <a className="link" href="#">Practice</a>
                <a className="link" href="#">Exam</a>
                <a className="link" href="#">Complaince</a>
                <a className="link" href="#">Taxman Bookstore</a>
                <a className="link" href="#">Taxman Blog</a>

                <h2 className="heading">About Company</h2>
                <a className="link" href="#">History</a>
                <a className="link" href="#">Board of Directors</a>
                <a className="link" href="#">Media Coverage</a>
                <a className="link" href="#">Taxman Education(CSR)</a>
                <a className="link" href="#">Careers</a>

            </div>
            <div className="col">

                <h2 className="heading">Catalogue</h2>
                <a className="link" href="#">Academic</a>
                <a className="link" href="#">Professional</a>
                <a className="link" href="#">Bare Acts</a>
                <a className="link" href="#">Banking & Finance</a>
                <a className="link" href="#">NSIM Certification Course</a>
                <a className="link" href="#">One Solution TDR & IR</a>
                <a className="link" href="#">Goods & Services Tax (GST)</a>
                <a className="link" href="#">LLB. Series</a>
                <a className="link" href="#">Insolvency & Bankurptcy</a>

            </div>
            <div className="col">
            
            <h2 className="heading">Authors</h2>
            <a className="link" href="#">Academic</a>
            <a className="link" href="#">Professional</a>
            <a className="link" href="#">A-Z</a>

            <h2 className="heading">Bookstore Support</h2>
            <a className="link" href="#">Quick Delivery with Fedex</a>
            <a className="link" href="#">Secured Payment</a>
            <a className="link" href="#">Free shipping above Rs.350</a>
            <a className="link" href="#">Missed call support @4556 2222</a>
            
            </div>
            <div className="col">

            <h2 className="heading">Bussiness & Support</h2>
            <a className="link" href="#">Sell With Taxman</a>
            <a className="link" href="#">Locate Dealers</a>
            <a className="link" href="#">Locate Reperesentatives</a>
            <a className="link" href="#">Contact Us</a>

            <h2 className="heading">Legal</h2>
            <a className="link" href="#">Privacy Policy</a>
            <a className="link" href="#">Return Policy</a>
            <a className="link" href="#">Payment Terms</a>
            <a className="link" href="#">Disclaimer</a>
            <a className="link" href="#">EULA</a>

            </div>

            </div>
        </div>
    )
}

export default Footer