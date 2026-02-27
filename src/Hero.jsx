import React from "react"
import './assets/css/Hero.css'
import profile_img from './assets/images/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero=()=>{
    return(
        <div id="home" className="hero">
            <img style={{borderRadius:'2000px',width:"200px",marginTop:"150px"}} src={profile_img}alt="" />
            <h1><span>I am Pritom Barua Shiro,</span>frontend developer based in BD.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique deserunt totam libero quidem, ipsum nesciunt suscipit facere quibusdam deleniti aliquam at itaque, </p>
            <div className="hero-section">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' ></AnchorLink>Connect wite me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )   
}
export default Hero