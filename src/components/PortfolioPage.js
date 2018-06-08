import React from 'react';
import {Link} from 'react-router-dom';
import chii from '../../public/imgs/chiibody.png';
import aurora from '../../public/imgs/auroralogo.png';
import usd from '../../public/imgs/usd.png';
import twitter from '../../public/imgs/twitter.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Particles from 'react-particles-js';

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

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div className="portfolio-div">
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
                    
                    <div className="custom-row">
                        <div className="custom-column">
                            <h2>Chii</h2>
                            <div className="content">
                                <img src={chii} alt="chii logo" className="chii-body" />
                                <p>Chii is a multi-purpose Discord bot featuring moderation, anime, gaming, gambling, nsfw and more!
                                Click the link icon to the right to view the documentation.
                                <br/>
                                <br/>
                                <i><b>Technologies used:</b></i>&nbsp; Javascript & the <a href="https://discord.js.org">Discord.js</a> module.</p>
                                <div className="overlay">
                                    <div className="content-links">
                                        <div className="clinks-container">
                                            <a href="https://github.com/brandonore/chii"><i className="fab fa-github"></i></a>
                                            <i className="fas fa-image" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}></i>
                                            <i className="fas fa-link"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="custom-row">
                        <div className="custom-column">
                            <h2>Aurora</h2>
                            <div className="content">
                                <img src={aurora} alt="aurora logo" className="aurora-logo" />
                                <p>A simple, minimal desktop cryptocurrency tracker built with the Electron framework.
                                View the github for a detailed readme. Download available for Windows and macOS.
                                <br/>
                                <br/>
                                <i><b>Technologies used:</b></i>&nbsp; Javascript, <a href="https://electronjs.org">Electron</a> & <a href="https://nodejs.org">Node JS</a></p>
                                <div className="overlay">
                                    <div className="content-links">
                                        <div className="clinks-container">
                                            <a href="https://github.com/brandonore/aurora"><i className="fab fa-github"></i></a>
                                            <i className="fas fa-image" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}></i>
                                            <a href="https://github.com/brandonore/aurora/releases"><i className="fas fa-download"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=================================================== */}
                    <div className="custom-row">
                        <div className="custom-column">
                            <h2>Expensify</h2>
                            <div className="content">
                                <img src={usd} alt="usd logo" className="usd-logo" />
                                <p>Expense manager built with React. Features Date/Price sorting and a filter search.
                                Uses firebase with Google Authentication to keep track of individual users.
                                <br/>
                                <br/>
                                <i><b>Technologies used:</b></i>&nbsp; Javascript, <a href="https://reactjs.org/">React</a>, <a href="https://redux.js.org/">Redux</a> 
                                &nbsp;& <a href="https://firebase.google.com/">Firebase</a></p>
                                <div className="overlay">
                                    <div className="content-links">
                                        <div className="clinks-container">
                                            <a href="https://github.com/brandonore/expensify-app"><i className="fab fa-github"></i></a>
                                            <i className="fas fa-image" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}></i>
                                            <a href="http://expensify.brandonore.io"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-row">
                        <div className="custom-column">
                            <h2>Twitter Interface</h2>
                            <div className="content">
                                <img src={twitter} alt="twitter logo" className="twitter-logo" />
                                <p>A custom interface built for twitter. Displays recent tweets, friends and direct messages.
                                Requires a separate config file to use. Please see the documentation. 
                                <br/>
                                <br/>
                                <i><b>Technologies used:</b></i>&nbsp; Javascript, <a href="https://nodejs.org">Node JS</a> & <a href="https://expressjs.com/">Express</a></p>
                                <div className="overlay">
                                    <div className="content-links">
                                        <div className="clinks-container">
                                            <a href="https://github.com/brandonore/Twitter-Interface"><i className="fab fa-github"></i></a>
                                            <i className="fas fa-image" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Particles width="90%"
                    params={{
                        particles: {
                            color: {
                                value: '262626'
                            },
                            number: {
                                value: 100
                            },
                            line_linked: {
                                opacity: 0.5,
                                color: '#262626',
                                width: '1'
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

export default PortfolioPage;