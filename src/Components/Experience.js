import React from 'react';
import KennethCole from './Experiences/KennethCole'
import ClubMonaco from './Experiences/ClubMonaco';

const Experience = () => {
    return(
        <div>
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h3>Experience</h3>
                </div>
                <div data-aos="fade-up"><KennethCole/></div>
                <div data-aos="fade-up"><ClubMonaco/></div>
            </div>
        </div>
    )
}

export default Experience