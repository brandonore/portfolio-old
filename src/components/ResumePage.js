import React from 'react';
import ReactDOM from 'react-dom';
import resume from '../../public/imgs/resume.png';
import Particles from 'react-particles-js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory';

const convertRemToPixels = (rem) => {
    return rem * parseInt(getComputedStyle(document.documentElement).fontSize);
} 

class ResumePage extends React.Component {

    render() {
        return (
            <div className="resume-div"> 
                <h1>Resume</h1>
                <div className="resume-content">
                    <div className="skills">
                        <h2>Skills</h2>
                        <div className="skills-container">
                            <div className="skills-about">
                                <h3>Skills & Experience</h3>
                                <p>I've mainly been focused more on the front-end side of the web using JS (ES5, ES6), HTML & CSS with a little
                                bit of back-end with Node.js, Express and MongoDB.</p>
                                <p>I've also been building small apps with ReactJS. I plan on picking up and learning Vue.js to compare with React.</p>
                            </div>
                            <div className="skills-list-container">
                                <h3>Tech I've worked with:</h3>
                                <div className="skills-list">
                                        <div className="s1">
                                            <ul>
                                                <li>JavaScript</li>
                                                <li>HTML 5</li>
                                                <li>CSS 3 + SASS</li>
                                                <li>jQuery</li>
                                                <li>Node.js</li>
                                                <li>Electron</li>
                                                <li>Express</li>
                                                <li>NPM + Yarn</li>
                                            </ul>
                                        </div>
                                        <div className="s2">
                                            <ul>
                                                <li>React + Redux</li>
                                                <li>Firebase</li>
                                                <li>MongoDB</li>
                                                <li>MySQL</li>
                                                <li>Bootstrap</li>
                                                <li>Wordpress</li>
                                                <li>Jest</li>
                                                <li>Gulp</li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                            <div className="skills-chart">
                                <VictoryPie
                                    padAngle={3}
                                    innerRadius={75}
                                    data={[
                                        {x: 1, y: 9, label: 'HTML'},
                                        {x: 2, y: 6, label: 'JavaScript'},
                                        {x: 3, y: 8, label: 'CSS'},
                                        {x: 4, y: 5, label: 'Node'},
                                        {x: 5, y: 8, label: 'jQuery'}
                                    ]}
                                    colorScale={['#f73a4e', '#fc2572', '#f42b99', '#dc45c0', '#ae62e3']}
                                    padding={{left: 60, right: 100}}
                                    style={{
                                        labels: {
                                            paddingRight: '30px',
                                            fill: '#FDFDFF',
                                            fontSize: convertRemToPixels(2)
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="work-exp">
                        <h2>Work History</h2>
                        <div className="job-container">
                            <h3><span>Freelance Web Developer</span></h3>
                            <p>2016 - Present</p>
                            <ul>
                                <li>Various website design and development for a number of companies</li>
                                <li>Wrote and edited web code using JavaScript, HTML, CSS, & jQuery</li>
                                <li>Created web compliant metadata for SEO find-ability</li>
                                <li>Consulted with client to outline website goals, illustrate wire frame and discuss site functionality</li>
                                <li>Managed, maintained and updated existing websites for clients</li>
                            </ul>
                        </div>
                        <div className="job-container">
                            <h3><span>Team Lead</span> - Rocky Mountain Wellness</h3>
                            <p>2015 - Present</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Phasellus vestibulum lorem sed risus ultricies tristique</li>
                                <li>Risus feugiat in ante metus dictum at</li>
                                <li>Blandit massa enim nec dui</li>
                                <li>Varius vel pharetra vel turpis nunc</li>
                            </ul>
                        </div>
                        <div className="job-container">
                            <h3><span>CS Representative</span> - ACS Billing</h3>
                            <p>2010 - 2012</p>
                            <ul>
                                <li>Responded to inbound service calls in a fast-paced, high-volume call center</li>
                                <li>Provided superior customer service and work quality while demonstrating attention to detail, flexibility and 
                                innovation in resolving problems</li>
                                <li>Enforced terms and conditions of contracts</li>
                                <li>Completed and filed separate forms for accounting and client support</li>
                                <li>Performed many clerical tasks including scanning, faxing and filing documents</li>
                            </ul>
                        </div>
                        <div className="job-container">
                            <h3><span>Manager</span> - Quiznos</h3>
                            <p>2007 - 2010</p>
                            <ul>
                                <li>Created Excel spreadsheets to summarize financial reports</li>
                                <li>Scheduled work shifts for 8 employees</li>
                                <li>Monitored, purchased and updated weekly inventory</li>
                                <li>Predicted future sales which streamlined the scheduling and food order process</li>
                                <li>Updated filing system by purging obsolete material and color-coding labels for fast retrieval</li>
                            </ul>
                        </div>
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
                                color: '#9EA0AA',
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