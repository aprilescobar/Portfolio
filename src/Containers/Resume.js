import React from 'react';
import KennethCole from '../Components/Experience/KennethCole'
import ClubMonaco from '../Components/Experience/ClubMonaco';

const Resume = () => {
    return(
        <div id="resume">
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h1>Resume</h1>
                </div>
                    <div data-aos="fade-up"><KennethCole/></div>
                    <div data-aos="fade-up"><ClubMonaco/></div>
            </div>
        </div>
    )
}

export default Resume