import React from 'react';
import resume from '../../public/imgs/resume.png';

const ResumePage = () => {
    return (
        <div className="resume-div">
            <h1>Below you can find my resume</h1>
            <div className="resume-content">
                <img src={resume} alt="personal resume"/>
            </div>
            <div className="resume-sidebar">
                <p>PDF</p>
                <a href={require('../../public/imgs/resume.pdf')} download="resume.pdf"><i class="fas fa-download"></i></a>
            </div>
        </div>
    )
}

export {ResumePage as default};