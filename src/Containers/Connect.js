import React from 'react';

const Contact = () => {
    const email = require("../Visuals/email.jpg");
    const linkedIn = require("../Visuals/linkedin.png");
    const github = require("../Visuals/github.png");
    const medium = require("../Visuals/medium.png");
    const yt = require("../Visuals/yt.png");

    return(
       <div id="contact">
            <div className="container">
                <div className="center">
                    <h3>Let's Connect!</h3>
                    <a className="color" href="mailto: aprilescobar.dev@gmail.com">
                        <img className="icon" src={email} alt="Email"/>Email
                    </a>
                    <a className="color" href="https://www.linkedin.com/in/april-escobar/" target="_blank" rel="noopener noreferrer">
                       <img className="icon" src={linkedIn} alt="LinkedIn"/>LinkedIn
                    </a>
                    <a className="color" href="https://github.com/aprilfaithdays" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={github} alt="Github"/>Github
                    </a><br/><br/>
                    <a className="color" href="https://medium.com/@aprilfaithdays" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={medium} alt="Medium"/>Medium
                    </a>
                    <a className="color" href="https://www.youtube.com/aprilfaith" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={yt} alt="YouTube"/>YouTube
                    </a>
                </div>
            </div>
       </div>
    )
}

export default Contact