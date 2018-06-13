import React from 'react';
import resume from '../../public/imgs/resume.png';
import Particles from 'react-particles-js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ResumePage extends React.Component {

    render() {
        return (
            <div className="resume-div"> 
                <div className="resume-content">
                    <h1>Resume</h1>
                    <img src={resume} alt="personal resume"/>
                    <div className="resume-sidebar">
                        <p>PDF</p>
                        <a href={require('../../public/imgs/resume.pdf')} download="resume.pdf"><FontAwesomeIcon icon={['fas', 'download']} /></a>
                    </div>
                </div>
                <Particles width="90%"
                    params={{
                        particles: {
                            number: {
                                value: 100
                            },
                            line_linked: {
                                opacity: 0.5,
                                color: '#262626',
                                width: '1'
                            }
                        }
                    }}
                    style={{
                        position: 'fixed',
                        right: 0,
                        top: 0,
                        zIndex: 0
                }}/>
            </div>
        )
    }
}

export {ResumePage as default};