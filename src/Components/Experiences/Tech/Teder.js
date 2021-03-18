import React from 'react';
import ExperienceCard from '../../ExperienceCard';

const Teder = () => {
    const url = 'https://onteder.com/static/media/logo.c520870a.svg';
    const company = 'Toledano Group LLC';
    const position = 'Frontend Developer';
    const dates = 'Sep 2020 - Present'

    const description = () => (
        <ul>
            <li>Complete ownership of the frontend development in two interactive web and mobile-responsive applications</li>
            <li>Execute and preserve high-quality coding standards for an elegant user experience, site stability and maintainability</li>
            <li>Effectively communicate with cross-functional teams to collaborate in prioritization, troubleshooting and delegation</li>
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