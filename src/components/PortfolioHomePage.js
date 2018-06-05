import React from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';
import homeBg from '../../public/imgs/home-bg2.jpg';

class PortfolioHomePage extends React.Component {

    render() {
        const style1 = {
            backgroundImage: `url(${homeBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }
        return (
            <div className="home-div">
                
                <div className="home-content">
                    <h1>Hello, my name is Brandon Ore. <br /> I am a <span>Web Developer</span></h1>
                    <p>Available for hire! <br />Want to work with me? Click below.</p>
                    
                    <Link to="/contact">
                        <button className="btn-main2">Contact me <i className="fal fa-envelope home-arrow"></i></button>
                    </Link>
                </div>
                <div className="home-overlay"></div>
            <Particles width="90%"
            params={{
                particles: {
                    number: {
                        value: 80
                    },
                    line_linked: {
                        opacity: 0.3,
                        color: '#000'
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