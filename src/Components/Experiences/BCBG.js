import React from 'react';
import ExperienceCard from '../ExperienceCard';


const BCBG = () => {
    const url = 'https://baldwineyeclinic.com/wp-content/uploads/2016/08/bcbg-maxazria-logo.png';
    const company = 'Robert Graham';
    const position = 'Lead Cashier';
    const dates = 'Jan 2014 - Nov 2014'

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

export default BCBG