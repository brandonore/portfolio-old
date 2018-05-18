import React from 'react';
import {NavLink} from 'react-router-dom';
import cropped from '../../public/imgs/cropped.png';
import { slide as Menu } from 'react-burger-menu'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({
            menuOpen: state.isOpen
        });
    }

    closeMenu() {
        this.setState({
            menuOpen: false
        });
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu 
                className="menu" 
                isOpen={this.state.menuOpen} 
                onStateChange={(state) => this.handleStateChange(state)} 
                width={window.innerWidth > 767 ? '15%' : '100%'}
            >
                <img className="home-img" src={cropped} alt="portfolio image" />
                <NavLink to="/" activeClassName="is-active" exact={true} onClick={() => this.closeMenu()}><i className="menu-item fal fa-home"></i> Home</NavLink>
                <NavLink to="/portfolio" activeClassName="is-active" exact={true} onClick={() => this.closeMenu()}><i className="menu-item fal fa-folder-open"></i> Portfolio</NavLink>
                <NavLink to="/resume" activeClassName="is-active" exact={true} onClick={() => this.closeMenu()}><i className="menu-item fal fa-file-alt"></i> Resume</NavLink>
                <NavLink to="/contact" activeClassName="is-active" exact={true} onClick={() => this.closeMenu()}><i className=" menu-item fal fa-envelope"></i> Contact</NavLink>
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
            </Menu>
        )
    }
}

export default Header;