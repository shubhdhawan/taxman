import React from 'react'
import './SideNav.css'


function SideNav()
{
    return(
        <div className="sidenav-container">
        <div className="sidenav-toggle">
            <p className="hide">Hide</p>
            <button className="round-btn">&#60;</button>
        </div>
        <p style={{backgroundColor: '#FEE6D6', height: '35px', width: '100%', alignItems: 'center'}}>
                <a className="sidenav-link"  style={{ paddingLeft:'30px'}}>Bookstore Home</a></p>
            <div className="sidenav-content">
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">-</p> Professional Books</p>
                <div className="line"></div>
               <p> <a className="sidenav-link">Direct Tax Laws</a></p>
               <p> <a className="sidenav-link">International Taxation</a></p>
               <p> <a className="sidenav-link">Indirect Tax Laws</a></p>
               <p> <a className="sidenav-link">Insolvency and Bankruptcy Code</a></p>
               <p> <a className="sidenav-link">GST</a></p>
               <p> <a className="sidenav-link">Accounts and Audit</a></p>
               <p> <a className="sidenav-link">Banking & Insurance</a></p>
               <p> <a className="sidenav-link">Bare Acts</a></p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> NISM/IIBF</p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> Journals</p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> Tax Compliance on DVD</p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> Taxmann online on DVD</p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> Taxmann online on Web</p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> E-Services</p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> E-Journals</p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> E-Books</p>
                <div className="line"></div>
                <p className="sidenav-heading"><p className="sidenav-sign">+</p> Advanced diploma in international taxation</p>
                <div className="line"></div>
                <p><a className="sidenav-link" style={{color: '#8A8A8A'}}>Quick Links</a></p>
                <p><a className="sidenav-link">Bookmann India</a></p>
                <p><a className="sidenav-link">Authors</a></p>
                <p className="sidenav-heading" style={{paddingLeft: '9px'}}><p className="sidenav-sign">+</p> Catalogue</p>
                <a className="sidenav-link">Dealers</a>

            </div>
    </div>
  

    )
}

export default SideNav