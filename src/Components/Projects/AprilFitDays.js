import React from 'react';
import ProjectCard from '../ProjectCard';
import LiveDemoBtn from '../LiveDemoBtn';


const AprilFitDays = () => {
    const url = 'https://www.youtube.com/watch?v=d42EvR8DZdM'

    const description = () => (
        <div>
            <h3>AprilFitDays</h3>
            AprilFitDays was inspired by this pandemic. I don't know about you, 
            but I love doign group fitness workouts!
            <br/><br/>
            Unfortunately with the pandemic and social distancing, it's a bit of 
            a challenge to hold group fitness sessions. Hence the creation of this app! 
            AprilFitDays is a library of follow-along videos that provides you with 
            a log of your completed workouts.
            <br/><br/>
            You also have the abilty to become a creator and contribute to the community by uploading your own follow-along videos!
            <br/>
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