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
                    <div className="img-div"><img className="home-img" src={cropped} alt="portfolio image" /></div>
                        <i class="fas fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                        <div class="menu-list">
                            <ul id="menu-content" class="menu-content collapse out">
                                <li  data-toggle="collapse" data-target="#products" class="collapsed active">
                                    <NavLink to="/" activeClassName="is-active" exact={true}><i class="fas fa-home"></i>Home</NavLink>
                                </li>

                                <li data-toggle="collapse" data-target="#service" class="collapsed">
                                    <NavLink to="/portfolio" activeClassName="is-active" exact={true}><i class="fas fa-folder"></i>Portfolio</NavLink>
                                </li>  
                                
                                <li data-toggle="collapse" data-target="#new" class="collapsed">
                                    <NavLink to="/resume" activeClassName="is-active" exact={true}><i class="fas fa-file-pdf"></i>Resume</NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to="/contact" activeClassName="is-active" exact={true}><i class="fas fa-envelope"></i>Contact</NavLink>
                                </li>
                            </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;