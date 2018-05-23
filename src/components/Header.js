import React from 'react';
import {NavLink} from 'react-router-dom';
import cropped from '../../public/imgs/cropped.png';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap';

class Header extends React.Component {

    render() {
        return (
            <header id="header">
                    <div class="nav-side-menu">
                    <div className="img-div">
                        <img className="home-img" src={cropped} alt="portfolio image" />
                        <div className="img-text"><h3>Brandon Ore</h3>{`{ Web Developer }`}</div>
                    </div>
                        <i class="fas fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                        <div class="menu-list">
                            <ul id="menu-content" class="menu-content collapse out">
                                <NavLink to="/" activeClassName="is-active" exact={true}><i class="fal fa-home"></i>Home</NavLink>
                                <NavLink to="/portfolio" activeClassName="is-active" exact={true}><i class="fal fa-folder"></i>Portfolio</NavLink>
                                <NavLink to="/resume" activeClassName="is-active" exact={true}><i class="fal fa-file-pdf"></i>Resume</NavLink>
                                <NavLink to="/contact" activeClassName="is-active" exact={true}><i class="fal fa-envelope"></i>Contact</NavLink> 
                            </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;