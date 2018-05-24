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
                                <i><b>Technologies used:</b></i>&nbsp; javascript & the <a href="https://discord.js.org">Discord.js</a> module.</p>
                                <div className="overlay"></div>
                            </div>
                        </div>
                        <div className="content-links">
                            <a href="https://github.com/brandonore/chii"><i className="fab fa-github"></i></a>
                            <i className="fas fa-image" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}></i>
                            <i className="fas fa-link"></i>
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
                                <i><b>Technologies used:</b></i>&nbsp; javascript, <a href="https://electronjs.org">Electron</a> & <a href="https://nodejs.org">Node JS</a></p>
                                <div className="overlay"></div>
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