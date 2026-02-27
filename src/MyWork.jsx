import React from "react";
import './assets/css/MyWork.css';
import theme_patter from './assets/images/theme_pattern.svg';
import mywork_data from "./mywork_data";
import arrow_icon from './assets2/arrow_icon.svg'
const MyWork=()=>{
    return(
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_patter} alt="" srcset="" />
            </div>
            <div className="mywork-container">
            {
                mywork_data.map((works,index)=>{
                    return <img key={index} src={works.w_img} alt="" />
                })
            }       
            </div>
            <div className="mywork-showmore">
                <p>Show more</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}
export default MyWork