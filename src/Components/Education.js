import React from 'react';

const Education = () => {
    return(
        <div>
            <div className="title">
                <h3>Education</h3>
            </div>
            <div className="row">
                <div className="col-sm bullets">            
                    <h5>Flatiron School</h5>
                    <p>
                        Jan 2020 - May 2020 <br/><br/>
                        <b>Full-Stack Web Development: JavaScript on React and Ruby on Rails</b>
                        <br/><br/>
                    </p>
                </div>
                <div className="col-sm bullets">
                    <h5>Fashion Institute of Technology, State University of New York</h5>
                    <p>
                        Aug 2012 - Dec 2016 <br/><br/>
                        <b>Bachelors in Applied Science: Production Management & Fashion Design</b><br/>
                       <small> Departmental Honor: C. Contreri & W. Sloves Award, Selected in the Fall 2014 AAS Motown Exhibition,
                       Bachelor's Degree Honor: Cum Laude, Associate's Degree Honor: Magna Cum Laude
                       </small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education