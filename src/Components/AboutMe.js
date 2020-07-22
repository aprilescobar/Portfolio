import React from 'react';

const AboutMe = () => {
    const photo = require("../Visuals/Photo.png");

    return(
        <div id="about-me"> 
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div id="photo">
                            <img className="photo" src={photo} alt="April"/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="description">
                            Hi there, my name is April Escobar. I worked in the fashion idustry for over 9 years.
                            I've always had an interest in efficiency and organizing.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
