import React from 'react';

const ProjectCard = (props) => {
    return(
        <div className="row">
            <div className="col-sm">
                <div className="company">
                    {props.company}
                </div>
            </div>
            <div className="col-sm">
                {props.desc}
            </div>
        </div>
    )
}

export default ProjectCard