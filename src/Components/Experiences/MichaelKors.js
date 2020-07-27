import React from 'react';
import ExperienceCard from '../ExperienceCard';

const MichaelKors = () => {
    const url = 'https://lh3.googleusercontent.com/proxy/a0LaUI0yNlWJRwfi4mnv3qVU_6ATahgRWOWHQqhSKxFy37NZGVngwG6Bf7Ns8skvGNjS_ZsKmKIWumQc5RXy6QqL3_9Ic3e1vEVZzHfAWy5hFWoktCw';
    const company = 'Robert Graham';
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