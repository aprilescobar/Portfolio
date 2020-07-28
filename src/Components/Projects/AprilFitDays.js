import React from 'react';
import ProjectCard from '../ProjectCard';


const AprilFitDays = () => {
    const url = 'https://www.youtube.com/watch?v=d42EvR8DZdM'
    const live = 'https://aprilfitdays.netlify.app/'
    const name = 'AprilFitDays'
    const dates = 'Apr 2020 - May 2020'

    const description = () => (
        <ul>
            <li>Developed and designed a UX focused web application where users can enjoy follow-along workouts effortlessly</li>
            <li>Implemented features that filter searches by developing, testing, and debugging object oriented data structures</li>
            <li>Utilized React UI framework with reusable Class and Functional Components built with NPM libraries/packages</li>
            <li>Engineered efficient algorithms that optimize speed and size capabilities while preserving rich web experiences</li>
            <li>Enhanced speed performance by customizing internal JSON backend APIs to render dynamic frontend interfaces</li>
        </ul>
    )

    return(
        <div className="des-card">
            <ProjectCard 
                url={url} 
                name={name}
                live={live}
                dates={dates}
                desc={description()}
            />
        </div>
    )
}

export default AprilFitDays