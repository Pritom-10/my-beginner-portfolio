import React from "react";
import './assets/css/About.css'
import theme_patter from './assets/images/theme_pattern.svg'
import profile_img1 from './assets/images/profile.png'
const About=()=>
{
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_patter} alt="" srcset="" />
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <img style={{width:"300px"}} src={profile_img1} alt="" srcset="" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam eos laudantium dolores eius hic perferendis expedita itaque </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a non assumenda.</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill">
                                <p>HTML & CSS</p><hr style={{width:"60%"}} /> </div>
                            <div className="about-skill">
                                <p>React JS</p><hr style={{width:"70%"}} /> </div>
                         <div className="about-skill">
                                <p>JAVA</p><hr style={{width:"60%"}} /> </div>
                            <div className="about-skill">
                                <p>Javascript</p><hr style={{width:"70%"}} /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>YEARS OF EXPEIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>90+</h1>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>15+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
               
            </div>
        </div>
    )
}
export default About