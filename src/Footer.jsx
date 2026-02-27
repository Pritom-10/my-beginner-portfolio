import React from "react";
import './assets/css/Footer.css'
import footer_logo from './assets/images/logo.png'
import user_icon from './assets2/user_icon.svg'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img style={{width:'150px'}}  src={footer_logo}alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto ipsam fugiat obcaecati, tenetur recusandae!</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email" name="email" />
                 </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom"># 2025 Pritom Barua. All rights reserved</p>
            <div className="footer-bottom-left">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
        </div>
    )
}
export default Footer