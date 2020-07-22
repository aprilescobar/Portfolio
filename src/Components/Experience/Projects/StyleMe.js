import React from 'react';
import ProjectCard from '../../ProjectCard';
import LiveDemoBtn from '../../LiveDemoBtn';

const StyleMe = () => {
    const url = 'https://www.youtube.com/watch?v=SUtbYjUhQDU'

    const description = () => (
        <div>
            <h3>
                StyleMe
            </h3>
            On days when you don't know what to wear, you can log into your StyleMe 
            account, browse through your outfits library, and wear the look you're going 
            for!

            <br/><br/>
            <LiveDemoBtn url='https://style-me.netlify.app/' />
        
        </div>
    )

    return(
        <div className="des-card">
            <ProjectCard url={url} desc={description()}/>
        </div>
    )
}

export default StyleMe