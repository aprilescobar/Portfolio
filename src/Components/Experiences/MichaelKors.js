import React from 'react';
import ExperienceCard from '../ExperienceCard';


const MichaelKors = () => {
    const url = 'https://lh3.googleusercontent.com/proxy/a0LaUI0yNlWJRwfi4mnv3qVU_6ATahgRWOWHQqhSKxFy37NZGVngwG6Bf7Ns8skvGNjS_ZsKmKIWumQc5RXy6QqL3_9Ic3e1vEVZzHfAWy5hFWoktCw';
    const company = 'Robert Graham';
    const position = 'Sales Assistant';
    const dates = 'Nov 2014 - Sep 2015'

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

export default MichaelKors