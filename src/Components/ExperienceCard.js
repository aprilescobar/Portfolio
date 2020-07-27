import React from 'react';

const ProjectCard = (props) => {
    return(
        <div className="row">
            <div className="col-sm-4">
                <div className="company">
                    <img className="logo" src={props.url} alt={props.company}/>
                </div>
            </div>
            <div className="col-sm-8 bullets">
                <h5>{props.position}</h5>
                <p>{props.dates}</p>
                {props.desc}
                <br/>
            </div>
        </div>
    )
}

export default ProjectCard