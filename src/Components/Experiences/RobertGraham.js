import React from 'react';
import ExperienceCard from '../ExperienceCard';


const RobertGraham = () => {
    const url = 'https://assets.simon.com/tenantlogos/22360.png';
    const company = 'Robert Graham';
    const position = 'Production Intern';
    const dates = 'Jul 2016 - Nov 2016'

    const description = () => (
        <ul>
            {/* <li>Opened and closed the store, communicated opportunities of improvement, and documented daily sales report</li> */}
            <li></li>
            <li></li>        
            <li></li>         
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

export default RobertGraham