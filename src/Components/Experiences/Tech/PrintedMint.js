import React from 'react';
import ExperienceCard from '../../ExperienceCard';

const PrintedMint = () => {
    const url = 'https://app.printedmint.com/web/image/website/1/logo/Printed%20Mint?unique=91ec085';
    const company = 'Printed Mint';
    const position = 'Junior Software Engineer';
    const dates = 'Sep 2020 - Jan 2021'

    const description = () => (
        <ul>
            <li>Designed web pages that improved the UI/UX which resulted in increased site traffic and product sales</li>
            <li>Timely coordinated with team members in developing, testing and debugging various layers of the infrastructure</li>
            <li>Quickly adapted to learning new technologies (Odoo, Python and XML) as the business’s needs shifted directions</li>
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