import React from 'react';
import ExperienceCard from '../ExperienceCard';

const ClubMonaco = () => {
    const url = 'https://assets.simon.com/tenantlogos/1198.png';
    const company = 'Club Monaco';
    const position = 'Keyholder';
    const dates = 'Sept 2015 - Dec 2016'

    const description = () => (
        <ul>
            {/* <li>Opened and closed the store, communicated opportunities of improvement, and documented daily sales report</li> */}
            <li>Increased sales profits through strong customer loyalty by building and maintaining stable clientele relationships</li>
            <li>Elevated clientele experience through quality teamwork, leading by example, and preserving the brand’s image</li>        
            <li>Implemented effective POS etiquette and product knowledge training procedures that maintained low LP numbers</li>        
        </ul>
    )

    return(
        <div className="des-card">
            <ExperienceCard 
                url={url}
                company={company} 
                position={position}
                dates={dates}
                desc={description()}
                />
        </div>
    )
}

export default ClubMonaco