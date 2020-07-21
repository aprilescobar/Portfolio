import React from 'react';

const AboutMe = () => {
    const photo = require("../Visuals/Photo.png");

    return(
        <div id="about-me"> 
            <div className="standard">
                <div className="title">
                    About Me
                </div>
                <div>
                    <img className="photo" src={photo} alt="April"/>
                </div>
                <div className="description">
                    Hi there, my name is April Escobar. Welcome to my portfolio
                </div>
            </div>
        </div>
    )
}

export default AboutMe