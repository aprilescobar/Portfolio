import React from 'react';
import ExperienceCard from '../../ExperienceCard';

const BCBG = () => {
    const url = 'https://baldwineyeclinic.com/wp-content/uploads/2016/08/bcbg-maxazria-logo.png';
    const company = 'Robert Graham';
    const position = 'Lead Cashier';
    const dates = 'Jan 2014 - Nov 2014'

    const description = () => (
        <ul>
            <li>Developed elevated design concepts through exceptional product knowledge, marketing and branding workshops</li>
            <li>Attained vital and effective communication skills through high-volume, fast-paced and intimate team environments</li>        
            <li>Improved leadership skills by training new-hires, including management level and digesting constructive feedback </li>        
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

export default BCBG