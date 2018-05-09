import React from 'react';
import {Link} from 'react-router-dom';
import chii from '../../public/imgs/chiibody.png';
import aurora from '../../public/imgs/auroralogo.png';

class PortfolioPage extends React.Component {

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
            <div className="portfolio-div">
                <a href="#" id="menu-btn" onClick={this.openNav}><i class="far fa-bars"></i></a>
                <h1>Projects</h1>
                <div className="portfolio-items">
                    <div className="row">
                        <div className="column">
                            <h2>Chii</h2>
                            <div className="content">
                                <img src={chii} alt="chii logo" className="chii-body" />
                                <p>Culpa voluptate ut sit mollit sint quis. Adipisicing ullamco veniam aute officia velit cillum cillum in tempor. 
                                Quis incididunt ipsum ullamco tempor dolor cillum pariatur in est. Consectetur reprehenderit quis veniam aliqua nisi 
                                aliqua pariatur irure eiusmod.</p>
                            </div>
                        </div>
                        <div className="content-links">
                            <i className="fab fa-github"></i>
                            <i className="fas fa-image"></i>
                            <i className="fas fa-link"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h2>Aurora</h2>
                            <div className="content">
                                <img src={aurora} alt="aurora logo" className="aurora-logo" />
                                <p>Culpa voluptate ut sit mollit sint quis. Adipisicing ullamco veniam aute officia velit cillum cillum in tempor. 
                                Quis incididunt ipsum ullamco tempor dolor cillum pariatur in est. Consectetur reprehenderit quis veniam aliqua nisi 
                                aliqua pariatur irure eiusmod.</p>
                            </div>
                        </div>
                        <div className="content-links">
                            <a href="https://github.com/brandonore/aurora"><i className="fab fa-github"></i></a>
                            <i className="fas fa-image"></i>
                            <a href="https://github.com/brandonore/aurora/releases"><i className="fas fa-download"></i></a>
                        </div>
                    </div>
                    {/*=================================================== */}
                </div>
            </div>
        )
    }
}

export default PortfolioPage;