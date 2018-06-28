import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import cropped from '../../public/imgs/cropped.png';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import CommitActivity from './CommitActivity';

class Header extends React.Component {

    render() {
        return (
            <header id="header">
                    <div className="nav-side-menu">
                    <div className="img-div">
                        <img className="home-img" src={cropped} alt="portfolio image" />
                        <div className="img-text"><h3>Brandon Ore</h3><p>{`< Web Developer />`}</p></div>
                    </div>
                    <FontAwesomeIcon icon={['fas', 'bars']} className="fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
                    <div className="menu-list">
                        <ul id="menu-content" className="menu-content collapse out">
                            <NavLink to="/" activeClassName="is-active" exact={true}><FontAwesomeIcon icon={['fal', 'home']} />Home</NavLink>
                            <NavLink to="/portfolio" activeClassName="is-active" exact={true}><FontAwesomeIcon icon={['fal', 'folder']} />Portfolio</NavLink>
                            <NavLink to="/resume" activeClassName="is-active" exact={true}><FontAwesomeIcon icon={['fal', 'file-pdf']} />Resume</NavLink>
                            <NavLink to="/contact" activeClassName="is-active" exact={true}><FontAwesomeIcon icon={['fal', 'envelope']} />Contact</NavLink> 
                        </ul>
                    </div>
                    <div className="trend">
                        <div className="commit-title">Github commit activity</div>
                        <div className="trend-line">
                            <CommitActivity />
                        </div>
                    </div>
                    <div className="nav-bottom">
                        <div className="nav-social">
                            <a href="https://github.com/brandonore/"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                            <a href="https://twitter.com/brandon_ore/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a> 
                            <a href="https://instagram.com/y2ktheory/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        </div>
                        <div className="nav-footer">
                        <FontAwesomeIcon icon={['fal', 'copyright']} /> 2018 Brandon Ore. Built with React <a href="https://reactjs.org/"><FontAwesomeIcon icon={['fab', 'react']} /></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;