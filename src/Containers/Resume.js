import React from 'react';
import Skills from '../Components/Skills';
import Experience from '../Components/Experience';

const Resume = () => {
    return(
        <div id="resume">
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h2>Resume</h2><br/>
                </div>
                    <p className="bullets center">
                    My background in fashion design and retail management offers a unique and specialized perspective for developing
                    and designing visually aesthetic websites focused on product presentations and 
                    rich user experiences. 
                    <br/>
                    </p>
                <div data-aos="fade-up"><Skills/></div>
                <div data-aos="fade-up"><Experience/></div>
            </div>
        </div>
    )
}

export default Resume