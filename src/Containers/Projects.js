import React from 'react';
import StyleMe from '../Components/Projects/StyleMe';
import AprilFitDays from '../Components/Projects/AprilFitDays';

const Projects = () => {
    return(
       <div id="projects">
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h2>Projects</h2>
                </div>
                <div data-aos="fade-up"><StyleMe /></div>
                <div data-aos="fade-up"><AprilFitDays /></div>
            </div>
       </div>
    )
}

export default Projects