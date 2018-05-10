import React from 'react';
import {Link} from 'react-router-dom';
import chii from '../../public/imgs/chiibody.png';
import aurora from '../../public/imgs/auroralogo.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

let images = ['https://facebook.github.io/react/logo-og.png', 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'];
let captions = ['test1', 'test2'];

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }

    openNav() {
        document.getElementById("menu-btn").style.display = "none";
        if(screen.width <= 1024 && screen.width > 680) {
            document.getElementById("header").style.height = "48.4px";
        } else if(screen.width <= 680) {
            document.getElementById("header").style.height = "150px";
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div className="portfolio-div">
                <a href="#" id="menu-btn" onClick={this.openNav}><i class="far fa-bars"></i></a>
                <h1>Projects</h1>
                {isOpen && (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % images.length, 
                        })
                      }
                      imageCaption={captions[this.state.photoIndex]}
                    />
                  )}
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
                            <a href="https://github.com/brandonore/chii"><i className="fab fa-github"></i></a>
                            <i className="fas fa-image" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}></i>
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
                            <i className="fas fa-image" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}></i>
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