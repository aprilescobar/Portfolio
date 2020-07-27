import React from 'react';
import ExperienceCard from '../ExperienceCard';

const RalphLauren = () => {
    const url = require("../../Visuals/RL-logo.png");
    const company = 'Ralph Lauren';
    const position = 'Global Manufacture & Sourcing: Lauren Woven Production Intern';
    const dates = 'Jun 2015 - Aug 2015'

    const description = () => (
        <ul>
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

export default RalphLauren