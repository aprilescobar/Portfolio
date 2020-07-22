import React from 'react';
import ExperienceCard from '../ExperienceCard';

const ClubMonaco = () => {
    const url = 'https://i.pinimg.com/originals/a5/8f/d6/a58fd6c35b02af42fb70f3c907ece8bd.png'

    const company = () => (
        <div>
            <img className="logo" src={url} alt="ClubMonaco"/>
            <h4>Men's Keyholder</h4>
            <h5>Sep 2015 - Dec 2016</h5>
        </div>
    )

    const description = () => (
        <ul>
            <li>Managed production for Kenneth Cole New York Ladies and Reaction Ladies ladies footwear</li>
            <li>Heavily involved in system operations. Created and maintained accurate information for internal and external use that saved the company from additional expenses.</li>
            <li>Communicated daily with cross-functional teams and factories overseas regarding costs, delivery and product info that kept everyone on the same page with the products in multiple seasons at various stages.</li>
            <li>Managed multiple documents to establish a more efficient process in placing factory purchase orders, ultimately led to meeting and/or exceeding margin goals consistently.</li>        
        </ul>
    )

    return(
        <div className="des-card">
            <ExperienceCard company={company()} desc={description()}/>
        </div>
    )
}

export default ClubMonaco