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
            {/* <li>Increased sales profits through strong customer loyalty by building and maintaining stable clientele relationships</li>
            <li>Elevated clientele experience through eminent teamwork, leading by example, and preserving the brand’s image</li>        
            <li>Implemented effective POS etiquette and product knowledge training procedures that maintained low LP numbers</li>     
            <li>Awarded -  Best Customer Loyalty Advocate and Sold Most Gift Card</li>    */}
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