import React, { useState } from 'react';
import KennethCole from './Experiences/Fashion/KennethCole'
import ClubMonaco from './Experiences/Fashion/ClubMonaco';
import RobertGraham from './Experiences/Fashion/RobertGraham';
import MichaelKors from './Experiences/Fashion/MichaelKors';
import RalphLauren from './Experiences/Fashion/RalphLauren';
import BCBG from './Experiences/Fashion/BCBG';
import Teder from './Experiences/Tech/Teder';
import PrintedMint from './Experiences/Tech/PrintedMint';

const Experience = () => {
    const [showTechExp, setShowTechExp] = useState(true);
    const [showFashionExp, setShowFashionExp] = useState(true);

    const renderTechExp = () => (
        <div data-aos="fade-up">
            <br/>
            <Teder/>
            <PrintedMint/>
            <br/>
        </div>
    )

    const renderFashionExp = () => (
        <div data-aos="fade-up">
            <br/>
            <KennethCole/>
            <ClubMonaco/>
            <RobertGraham/>
            <MichaelKors/>
            <RalphLauren/>
            <BCBG/>
        </div>
    )

    return(
        <div>
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h3>Experience</h3>
                </div>
                <div>
                    <div className="row toggle-title" onClick={() => setShowTechExp(!showTechExp)}>
                        <div className="col"><h3 className="text-left" >Technology </h3></div>
                        <div className="col"><h3 className="text-right">{showTechExp ? '⌃' : '⌵'}</h3></div>
                    </div>
                    {showTechExp && renderTechExp()}
                    <br/>
                    <div className="row toggle-title" onClick={() => setShowFashionExp(!showFashionExp)}>
                        <div className="col"><h3 className="text-left">Fashion</h3></div>
                        <div className="col"><h3 className="text-right">{showFashionExp ? '⌃' : '⌵'}</h3></div>
                    </div>
                    
                    {showFashionExp && renderFashionExp()}
                </div>
            </div>
        </div>
    )
}

export default Experience