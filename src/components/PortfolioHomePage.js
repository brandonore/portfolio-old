import React from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';

class PortfolioHomePage extends React.Component {
    
    openNav() {
        document.getElementById("menu-btn").style.display = "none";
        if(screen.width <= 1024 && screen.width > 680) {
            document.getElementById("header").style.height = "48.4px";
        } else if(screen.width <= 680) {
            document.getElementById("header").style.height = "150px";
        }
    }

    render() {
        return (
            <div className="home-div">
                <a href="#" id="menu-btn" onClick={this.openNav}><i class="far fa-bars"></i></a>
                <div className="home-content">
                    <h1>Hello! My name is <div className="name">Brandon Ore</div> and I make web stuff.</h1>
                    <Link to="/portfolio">
                        <button className="btn-main">View my projects <i class="fal fa-arrow-right home-arrow"></i></button>
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