import React from 'react';

const Contact = () => {
    return(
       <div id="contact">
            {/* <div data-aos="fade-right" className="container"> */}
            <div className="container">
                <div className="center">
                    <h3>Let's Connect!</h3>
                    <a className="color" href="mailto: aprilfaith.e@gmail.com">Email</a> | {' '}
                    <a className="color" href="https://www.linkedin.com/in/april-escobar/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | {' '}
                    <a className="color" href="https://github.com/aprilfaithdays" target="_blank" rel="noopener noreferrer">Github</a> | {' '}
                    <a className="color" href="https://medium.com/@aprilfaithdays" target="_blank" rel="noopener noreferrer">Blog</a>
                </div>
            </div>
       </div>
    )
}

export default Contact