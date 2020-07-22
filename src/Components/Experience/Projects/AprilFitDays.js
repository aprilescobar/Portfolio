import React from 'react';
import ProjectCard from '../../ProjectCard';
import LiveDemoBtn from '../../LiveDemoBtn';


const AprilFitDays = () => {
    const url = 'https://www.youtube.com/watch?v=d42EvR8DZdM'

    const description = () => (
        <div>
            <h3>AprilFitDays</h3>
                Workout from the comfort of your home! AprilFitDays is a web application
                that
            <br/><br/>
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