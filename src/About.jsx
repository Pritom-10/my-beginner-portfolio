import React from "react";
import './assets/css/About.css'
import theme_patter from './assets/images/theme_pattern.svg'
import profile_img1 from './assets/images/profile.png'
const About=()=>
{
    return (
      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_patter} alt="" srcset="" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img
              style={{ width: "300px" }}
              src={profile_img1}
              alt=""
              srcset=""
            />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I am a passionate Frontend Developer who enjoys building modern,
                responsive, and user-friendly web applications. I like turning
                ideas into real products by writing clean and structured code.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "60%" }} />{" "}
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "70%" }} />{" "}
              </div>
              <div className="about-skill">
                <p>JAVA</p>
                <hr style={{ width: "60%" }} />{" "}
              </div>
              <div className="about-skill">
                <p>Javascript</p>
                <hr style={{ width: "70%" }} />
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
    );
}
export default About