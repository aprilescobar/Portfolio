import React from 'react';
import ExperienceCard from '../ExperienceCard';

const RobertGraham = () => {
    const url = 'https://assets.simon.com/tenantlogos/22360.png';
    const company = 'Robert Graham';
    const position = 'Production Intern';
    const dates = 'Jul 2016 - Nov 2016'

    const description = () => (
        <ul>
            <li>Acquired strategic business foundations by producing weekly wholesale and retail margin analysis history reports</li>
            <li>Developed strong organizational skills by creating and processing multiple financial and production documents</li>        
            <li>Enhanced productivity flow by creating a trim library filled with the latest vendor samples, lead-times and prices</li>         
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