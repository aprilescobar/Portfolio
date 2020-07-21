import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const AboutMe = () => {
    const photo = require("../Visuals/Photo.png");

    useEffect(() => {
        Aos.init({ duration: 1300 });
      }, []);

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
                    <div className="col-md">
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
