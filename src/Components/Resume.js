import React from 'react';
import KennethCole from '../Experience/KennethCole'
import ClubMonaco from '../Experience/ClubMonaco';

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