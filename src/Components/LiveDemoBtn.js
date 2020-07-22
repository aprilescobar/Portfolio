import React from 'react';

const LiveDemoBtn = (props) => {
    return(
        <div className="center">
            <a href={props.url} className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    )
}

export default LiveDemoBtn