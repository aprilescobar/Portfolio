import React from 'react';
import ExperienceCard from '../ExperienceCard';


const KennethCole = () => {
    const url = 'https://pbs.twimg.com/profile_images/741381421030199296/hghjIMZK_400x400.jpg'

    const company = () => (
        <div>
            <img className="logo" src={url} alt="KennethCole"/>
            {/* <h4>Kenneth Cole</h4> */}
            <h5>Assistant Production Manager</h5>
            <p>Apr 2017 - Jun 2019</p>
        </div>
    )

    const description = () => (
        <ul>
            <li>Increased business profits by meeting/exceeding margin goals consistently through executing efficient processes</li>
            <li>Enhanced productivity flow through effective communications with cross-functional teams and factories overseas</li>
            <li>Persistently produced high quality products through deliberate planning, testing, and cost engineering production</li>        
        </ul>
    )

    return(
        <div className="des-card">
            <ExperienceCard company={company()} desc={description()}/>
        </div>
    )
}

export default KennethCole