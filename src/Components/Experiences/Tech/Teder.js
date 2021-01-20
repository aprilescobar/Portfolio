import React from 'react';
import ExperienceCard from '../../ExperienceCard';

const Teder = () => {
    const url = 'https://onteder.com/images/logo.svg';
    const company = 'Teder';
    const position = 'Frontend Developer';
    const dates = 'Sept 2020 - Present'

    const description = () => (
        <ul>
            <li>Coming soon :)</li>
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

export default Teder