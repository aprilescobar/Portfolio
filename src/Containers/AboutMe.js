import React from 'react';

const AboutMe = () => {
    const photo = require("../Visuals/Photo.png");

    return(
        <div id="about-me"> 
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h2>About Me</h2>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div id="photo">
                            <img className="photo" src={photo} alt="April"/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="description">
                            <p>Hi there,</p>
                            <p>                                
                                My name is April and I'm a full-stack software engineer. I enjoy building effective and 
                                efficient programs that basically make life easier. I love expressing my creative side by
                                designing visually aesthetic front-end development and smooth user experiences.
                            </p>
                            <p>I'm currently open to explore opportunities and willing to work remotely.</p>
                            <p>Let's <a className="color" href="#contact">connect</a>!</p>
                            <p>Cheers, <br/>April</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
