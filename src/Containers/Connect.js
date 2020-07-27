import React from 'react';

const Contact = () => {
    return(
       <div id="contact">
            <div data-aos="fade-right" className="container">
                <div className="title">
                    <h2>Contact Me</h2>
                </div>
                <div className="center">
                    <a className="color" href="mailto: aprilfaith.e@gmail.com">Email</a> | {' '}
                    <a className="color" href="https://www.linkedin.com/in/april-escobar/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | {' '}
                    <a className="color" href="https://github.com/aprilfaithdays" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
       </div>
    )
}

export default Contact