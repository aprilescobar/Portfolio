import React from 'react';

const ProjectCard = (props) => {
    return(
        <div className="row">
            <div className="col-sm-4">
                <div className="company">
                    {props.company}
                </div>
            </div>
            <div className="col-sm-8 bullets">
                {props.desc}
            </div>
        </div>
    )
}

export default ProjectCard