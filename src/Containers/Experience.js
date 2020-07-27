import React from 'react';
import KennethCole from '../Components/Experiences/KennethCole'
import ClubMonaco from '../Components/Experiences/ClubMonaco';
import RobertGraham from '../Components/Experiences/RobertGraham';
import MichaelKors from '../Components/Experiences/MichaelKors';
// import RalphLauren from '../Components/Experiences/RalphLauren';
// import BCBG from '../Components/Experiences/BCBG';

const Experience = () => {
    return(
        <div>
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h3>Experience</h3>
                </div>
                <div data-aos="fade-up"><KennethCole/></div>
                <div data-aos="fade-up"><ClubMonaco/></div>
                <div data-aos="fade-up"><RobertGraham/></div>
                <div data-aos="fade-up"><MichaelKors/></div>
                {/* <div data-aos="fade-up"><RalphLauren/></div> */}
                {/* <div data-aos="fade-up"><BCBG/></div> */}
            </div>
        </div>
    )
}

export default Experience