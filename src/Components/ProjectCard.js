import React from 'react';
import ReactPlayer from 'react-player';
import LiveDemoBtn from './LiveDemoBtn';

const ProjectCard = (props) => {    
    return(
        <div className="row">
            <div className="col-sm-4">
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
                <div className="col-sm-8">
                    <div className="desc-card">
                        <h4>{props.name}</h4>
                        {props.desc}
                        <LiveDemoBtn url={props.live} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard