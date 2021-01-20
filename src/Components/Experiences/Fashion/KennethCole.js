import React from 'react';
import ExperienceCard from '../../ExperienceCard';


const KennethCole = () => {
    const url = 'https://upload.wikimedia.org/wikipedia/commons/3/32/Kenneth-Cole.png';
    const company = 'Kenneth Cole';
    const position = 'Assistant Production Manager';
    const dates = 'Apr 2017 - Jun 2019'

    const description = () => (
        <ul>
            <li>Increased business profits by meeting/exceeding margin goals consistently through executing efficient processes</li>
            <li>Persistently produced high quality products through deliberate planning, testing, and cost engineering production</li>        
            <li>Enhanced productivity flow through effective communications with cross-functional teams and factories overseas</li>
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

export default KennethCole