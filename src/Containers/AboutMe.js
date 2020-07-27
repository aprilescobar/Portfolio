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
                            <p>
                                Hi there :] 
                                <br/><br/>
                                My name is April and I'm a full-stack software engineer. I enjoy building effective and 
                                efficient programs that basically make life easier. I love expressing my creative side by
                                designing visually aesthetic font-end development and smooth user experiences.
                                <br/><br/>
                                I'm currently open to explore opportunities and willing to relocating.
                                Let's <a className="color" href="#contact">connect</a>!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
