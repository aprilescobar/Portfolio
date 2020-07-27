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
                <div className="row">
                    <div className="col">
                        <h5>{props.position}</h5>
                    </div>
                    <div className="col date">
                        <p>{props.dates}</p>
                    </div>
                </div>
                {props.desc}
                <br/>
            </div>
        </div>
    )
}

export default ProjectCard