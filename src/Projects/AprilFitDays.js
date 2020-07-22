import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import LiveDemoBtn from '../Components/LiveDemoBtn';


const AprilFitDays = () => {
    const url = 'https://www.youtube.com/watch?v=d42EvR8DZdM'

    const description = () => (
        <div>
            AprilFitDays was inspired by this pandemic. I don't know about you, but I love doing group fitness workouts! 
            The main reason being, I don't need to think about what moves to do! In group fitness workouts, you just show up, 
            focus on your form and get a good sweat in!
            <br/><br/>
            <LiveDemoBtn url='https://aprilfitdays.netlify.app/' />
        </div>
    )

    return(
        <div className="project">
            <ProjectCard url={url} desc={description()}/>
        </div>
    )
}

export default AprilFitDays