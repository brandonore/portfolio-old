import React from 'react';
import {NavLink} from 'react-router-dom';
import cropped from '../../public/imgs/cropped.png';

class Header extends React.Component {

    closeNav() {
        document.getElementById("header").style.height = "0px";
        document.getElementById("menu-btn").style.display = "block";
    }

    render() {
        return (
            <header id="header">
                <div className="img-div"><img className="home-img" src={cropped} alt="portfolio image" /></div>
                <a href="#" className="close-btn" onClick={this.closeNav}><i className="fal fa-times"></i></a>
                <div className="nav-links">
                    <NavLink to="/" activeClassName="is-active" exact={true}><i className="fal fa-home"></i> Home</NavLink>
                    <NavLink to="/portfolio" activeClassName="is-active" exact={true}><i className="fal fa-folder-open"></i> Portfolio</NavLink>
                    <NavLink to="/resume" activeClassName="is-active" exact={true}><i className="fal fa-file-alt"></i> Resume</NavLink>
                    <NavLink to="/contact" activeClassName="is-active"><i className="fal fa-envelope"></i> Contact</NavLink>
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
            </header>
        )
    }
}

export default Header;