import React from 'react';
import ExperienceCard from '../ExperienceCard';

const ClubMonaco = () => {
    const url = 'https://i.pinimg.com/originals/a5/8f/d6/a58fd6c35b02af42fb70f3c907ece8bd.png';
    const company = 'Club Monaco';
    const position = 'Keyholder';
    const dates = 'Sept 2015 - Dec 2016'

    const description = () => (
        <ul>
            <li>Opened and closed the store, communicated opportunities of improvement, and documented daily sales report</li>
            <li>Delegated the men’s team to execute tasks on sight by prioritizing, leading by example and through teamwork</li>
            <li>Trained new hires with product knowledge, clienteling, POS operations, visual standards, and stock procedures</li>        
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