import React from 'react';
import ProjectCard from '../ProjectCard';
import LiveDemoBtn from '../LiveDemoBtn';

const StyleMe = () => {
    const url = 'https://www.youtube.com/watch?v=SUtbYjUhQDU'

    const description = () => (
        <div>
            <h3>
                StyleMe
            </h3>
            StyleMe♡ is all about having a library of outfit options. On days when you don't know what to wear, 
            you can simply log into your StyleMe♡ account, browse through your outfits library, and wear the look you're going for!
            <br/><br/>
            For added inspiration, you have the ability to browse other outfits created by other users. You can like and comment 
            any of the outfits you see! Once you like an outfit, it's saved in your liked library for you to reference later on! 
            Or you know... unless the user decided to delete that outfit... then it'll disappear from your liked library too.

            <br/>
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