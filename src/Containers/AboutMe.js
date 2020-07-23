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
                            <h3>Full-Stack Software Engineer</h3>
                            <p>
                            I have a background in fashion design and retail management that offers a unique and 
                            specialized perspective for developing and designing visually aesthetic 
                            websites focused on product presentations and rich user experiences.
                            <br/><br/>
                            I am open to opportunities as a recent graduate from the Flatiron School, a 15-week immersive coding bootcamp. 
                            <br/><br/>
                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
