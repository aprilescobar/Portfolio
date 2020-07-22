import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import LiveDemoBtn from '../Components/LiveDemoBtn';

const StyleMe = () => {
    const url = 'https://www.youtube.com/watch?v=SUtbYjUhQDU'

    const description = () => (
        <div>
            StyleMe is all about having a library of outfit options. On days when you don't know what to wear, 
            you can simply log into your StyleMe account, browse through your outfits library, and wear the look you're going for!

            <br/><br/>
            <LiveDemoBtn url='https://style-me.netlify.app/' />
        
        </div>
    )

    return(
        <div className="project">
            <ProjectCard url={url} desc={description()}/>
        </div>
    )
}

export default StyleMe