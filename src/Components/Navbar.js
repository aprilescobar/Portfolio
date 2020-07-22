import React from 'react';

const Navbar = () => {
    return(
        <div className="fixed-top">
            <ul className="navi nav">
                <li className="nav-item">
                    <a className="nav-link color" href="#about-me">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color" href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link color" href="#connect">Connect</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar