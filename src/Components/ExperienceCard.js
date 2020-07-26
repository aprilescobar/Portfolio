import React from 'react';

const ProjectCard = (props) => {
    return(
        <div className="row">
            <div className="col-sm-4">
                <div className="company">
                    <img className="logo" src={props.url} alt={props.company}/>
                    <p>{props.dates}</p>
                </div>
            </div>
            <div className="col-sm-8 bullets">
                <h5>{props.position}</h5>
                {props.desc}
            </div>
        </div>
    )
}

export default ProjectCard