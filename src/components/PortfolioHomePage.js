import React from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';

class PortfolioHomePage extends React.Component {

    render() {
        return (
            <div className="home-div">
                <div className="home-content">
                    <h1>Brandon Ore | <span>Web Developer</span></h1>
                    <p>Want to work with me? Available for hire!</p>
                    <Link to="/portfolio">
                        <button className="btn-main">View my projects <i class="fal fa-arrow-right home-arrow"></i></button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn-main2">Contact me <i class="fal fa-envelope home-arrow"></i></button>
                    </Link>
                </div>
            <Particles width="90%"
            params={{
                particles: {
                    number: {
                        value: 80
                    },
                    line_linked: {
                        opacity: 0.3
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

export default PortfolioHomePage;