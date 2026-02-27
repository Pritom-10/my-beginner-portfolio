import React from "react";
import './assets/css/Services.css'
import theme_patter from './assets/images/theme_pattern.svg'
import Services_Data from "./services_data";
import arrow_icon from './assets2/arrow_icon.svg'
const Services=()=>
{
    return(
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_patter} alt="" srcset="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <img src={arrow_icon} alt="" srcset="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Services