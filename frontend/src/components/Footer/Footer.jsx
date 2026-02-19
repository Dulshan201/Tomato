import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Premium artisan sauces crafted with passion and the finest ingredients. From fiery hot sauces to rich BBQ glazes, we deliver bold flavors that transform every meal into a culinary masterpiece. Taste the difference quality makes.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>011-2314521</li>
                    <li>contact@sauceshop.com</li>
                </ul>
            </div>
            </div>
        <hr />
        <p className="footer-copyright">Copyright © 2024 SauceShop.com - All Rights Reserved.
        </p>
        
      
    </div>
  )
}

export default Footer
