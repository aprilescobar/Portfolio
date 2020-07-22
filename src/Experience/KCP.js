import React from 'react';
import ExperienceCard from '../Components/ExperienceCard';


const KCP = () => {
    const company = () => (
        <div>
            <img className="logo" src="https://m.media-amazon.com/images/S/aplus-media/vc/1ad00ee6-b61f-45e3-a37f-471292cb80ec._CR264,0,970,300_PT0_SX970__.jpg" alt="kcp"/>
            <h4>Assistant Production Manager</h4>
            April 2017 - June 2019
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
        <div className="project">
            <ExperienceCard company={company()} desc={description()}/>
        </div>
    )
}

export default KCP