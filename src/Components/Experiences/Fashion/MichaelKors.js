import React from 'react';
import ExperienceCard from '../../ExperienceCard';

const MichaelKors = () => {
    const url = require("../../../Visuals/mk.png");
    const company = 'Michael Kors';
    const position = 'Sales Assistant';
    const dates = 'Nov 2014 - Sep 2015'

    const description = () => (
        <ul>
            <li>Attained essential concepts of successful retail management through high-volume and fast-paced environments</li>
            <li>Established exceptional clientele services through high quality teamwork and executing effective POS procedures</li>        
            <li>Consistently refined product knowledge skills through involvement in marketing and branding training workshops </li>       
            <li>Awarded - Best Customer Service, Loyalty Enthusiast, and Top Jet Setter at the Cash Wrap</li>       
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

export default MichaelKors