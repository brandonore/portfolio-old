import React from 'react';
import {NavLink} from 'react-router-dom';
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
                        <div className="img-text"><h3>Brandon Ore</h3><p>{`{ Web Developer }`}</p></div>
                    </div>
                    <i className="fas fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                    <div className="menu-list">
                        <ul id="menu-content" className="menu-content collapse out">
                            <NavLink to="/" activeClassName="is-active" exact={true}><i className="fal fa-home"></i>Home</NavLink>
                            <NavLink to="/portfolio" activeClassName="is-active" exact={true}><i className="fal fa-folder"></i>Portfolio</NavLink>
                            <NavLink to="/resume" activeClassName="is-active" exact={true}><i className="fal fa-file-pdf"></i>Resume</NavLink>
                            <NavLink to="/contact" activeClassName="is-active" exact={true}><i className="fal fa-envelope"></i>Contact</NavLink> 
                        </ul>
                    </div>
                    <div className="github-content">
                        <div className="github-title">Github activity</div>
                        <ul className="github-container">
                            <li>Repos &nbsp;<span>|</span> &nbsp;<b>14</b></li>
                            <li>Followers &nbsp;<span>|</span> &nbsp;<b>2</b></li>
                            <li>Stars &nbsp;<span>|</span> &nbsp;<b>15</b></li>
                            <li>Following &nbsp;<span>|</span> &nbsp;<b>12</b></li>
                        </ul>
                    </div>
                    <div className="trend">
                        <div className="commit-title">Commit activity</div>
                        <div className="trend-line">
                            <CommitActivity />
                        </div>
                    </div>
                    <div className="nav-bottom">
                        <div className="nav-social">
                            <a href="https://github.com/brandonore/"><i className="fab fa-github"></i></a>
                            <a href="https://twitter.com/brandon_ore/"><i className="fab fa-twitter"></i></a> 
                            <a href="https://instagram.com/y2ktheory/"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="nav-footer">
                            <i className="fal fa-copyright"></i> 2018 Brandon Ore. Built with React <a href="https://reactjs.org/"><i className="fab fa-react"></i></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;