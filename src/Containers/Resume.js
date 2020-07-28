import React from 'react';
import Skills from '../Components/Skills';
import Experience from '../Components/Experience';
import Education from '../Components/Education';

const Resume = () => {
    return(
        <div id="resume">
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h2>
                      <a href="https://docs.google.com/document/d/1dgvQrMPBuzkeHKucDGYAu71xB004BYJLAJjA8AahMFw/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="pdf" src="https://cdn.worldvectorlogo.com/logos/adobe-pdf-icon.svg" alt="pdf"/></a>{'  '}Resume
                    </h2>
                </div>
                <div className="bullets center">
                    <h4>Full-Stack Software Engineer</h4>
                    <p >
                        My background in fashion design and retail management offers a unique and specialized perspective for developing <br/>
                        and designing visually aesthetic websites focused on product presentations and rich user experiences. 
                    <br/>
                    </p>
                </div>
                <div data-aos="fade-up"><Skills/></div>
                <div data-aos="fade-up"><Experience/></div>
                <div data-aos="fade-up"><Education/></div>
            </div>
        </div>
    )
}

export default Resume