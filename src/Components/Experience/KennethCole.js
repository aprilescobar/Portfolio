import React from 'react';
import ExperienceCard from '../ExperienceCard';


const KennethCole = () => {
    const url = 'https://pbs.twimg.com/profile_images/741381421030199296/hghjIMZK_400x400.jpg'

    const company = () => (
        <div>
            <img className="logo" src={url} alt="KennethCole"/>
            <h4>Assistant Production Manager</h4>
            <h5>Apr 2017 - Jun 2019</h5>
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

export default KennethCole