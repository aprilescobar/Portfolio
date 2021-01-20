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
                      <a href="https://drive.google.com/file/d/1oWzTRllwf3BEWLGTi9HLjdOZgwV0jUyK/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="pdf" src="https://cdn.worldvectorlogo.com/logos/adobe-pdf-icon.svg" alt="pdf"/></a>{'  '}Resume
                    </h2>
                </div>
                <div className="row">
                    <div data-aos="fade-up" className="col-sm">
                        <h3>Summary</h3>
                        <p >
                        Full-stack software engineer (JS, React, Ruby on Rails) with an additional 9+ years in fashion and retail management, 
                        offering a unique and specialized perspective in web design and elevated product knowledge. Open to software engineering 
                        positions with an eagerness to combine a natural passion for creativity and providing rich user experiences.  
                        <br/>
                        </p>
                    </div>
                    <div data-aos="fade-up" className="col-sm">
                        <Skills/>
                    </div>
                </div>
                <div><Experience/></div>
                <div><Education/></div>
            </div>
        </div>
    )
}

export default Resume