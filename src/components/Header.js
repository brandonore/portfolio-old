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
                    <div className="nav-bottom">
                        <div className="nav-social">
                            <a href="https://github.com/brandonore/"><i class="fab fa-github"></i></a>
                            <a href="https://twitter.com/brandon_ore/"><i class="fab fa-twitter"></i></a> 
                            <a href="https://instagram.com/y2ktheory/"><i class="fab fa-instagram"></i></a>
                        </div>
                        <div className="nav-footer">
                            <i class="fal fa-copyright"></i> 2018 Brandon Ore. Built with React <a href="https://reactjs.org/"><i class="fab fa-react"></i></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;