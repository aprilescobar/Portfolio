import React from 'react';
import ExperienceCard from '../ExperienceCard';

const ClubMonaco = () => {
    const url = 'https://i.pinimg.com/originals/a5/8f/d6/a58fd6c35b02af42fb70f3c907ece8bd.png'

    const company = () => (
        <div>
            <img className="logo" src={url} alt="ClubMonaco"/>
            {/* <h4>Club Monaco</h4> */}
            <h5>Men's Keyholder</h5>
            <p>Sep 2015 - Dec 2016</p>
        </div>
    )

    const description = () => (
        <ul>
            <li>Opened and closed the store, communicated opportunities of improvement, and documented daily sales report</li>
            <li>Delegated the men’s team to execute tasks on sight by prioritizing, leading by example and through teamwork</li>
            <li>Trained new hires with product knowledge, clienteling, POS operations, visual standards, and stock procedures</li>        
        </ul>
    )

    return(
        <div className="des-card">
            <ExperienceCard company={company()} desc={description()}/>
        </div>
    )
}

export default ClubMonaco