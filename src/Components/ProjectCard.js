import React from 'react';
import ReactPlayer from 'react-player';

const ProjectCard = (props) => {
    return(
        <div className="row">
            <div className="col-sm">
                <div className='player-wrapper'>
                    <ReactPlayer 
                        className='react-player'
                        url={props.url}
                        playing={false} 
                        controls={true} 
                        light={true} 
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
            <div className="col-sm">
                <div className="description">
                    {props.desc}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard