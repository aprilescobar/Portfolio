import React from 'react';
import ProjectCard from '../ProjectCard';
import LiveDemoBtn from '../LiveDemoBtn';


const AprilFitDays = () => {
    const url = 'https://www.youtube.com/watch?v=d42EvR8DZdM'

    const description = () => (
        <div>
            <h4>AprilFitDays</h4>
            <ul>
                <li>Developed and designed a user experience focused web application that processes and renders real-time data</li>
                <li>Implemented successful complex features by developing, testing, and debugging object oriented data structures </li>
                <li>Utilized React UI framework with reusable Class and Functional Components built with NPM libraries/packages</li>
                <li>Enhanced speed performance by customizing internal JSON backend APIs to render dynamic frontend interfaces</li>
                <li>Engineered efficient algorithms that optimize speed and size capabilities and maintain a rich user web experience</li>
            </ul>
            <LiveDemoBtn url='https://aprilfitdays.netlify.app/' />
        </div>
    )

    return(
        <div className="des-card">
            <ProjectCard url={url} desc={description()}/>
        </div>
    )
}

export default AprilFitDays