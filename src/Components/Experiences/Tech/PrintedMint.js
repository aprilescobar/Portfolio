import React from 'react';
import ExperienceCard from '../../ExperienceCard';

const PrintedMint = () => {
    const url = 'https://app.printedmint.com/web/image/website/1/logo/Printed%20Mint?unique=91ec085';
    const company = 'Printed Mint';
    const position = 'Junior Software Engineer';
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

export default PrintedMint