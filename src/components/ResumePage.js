import React from 'react';
import resume from '../../public/imgs/resume.png';

class ResumePage extends React.Component {

    openNav() {
        document.getElementById("menu-btn").style.display = "none";
        if(screen.width <= 1024 && screen.width > 680) {
            document.getElementById("header").style.height = "48.4px";
        } else if(screen.width <= 680) {
            document.getElementById("header").style.height = "150px";
        }
    }

    render() {
        return (
            <div className="resume-div">
                <a href="#" id="menu-btn" onClick={this.openNav}><i class="far fa-bars"></i></a>
                <h1>Resume</h1>
                <div className="resume-content">
                    <img src={resume} alt="personal resume"/>
                </div>
                <div className="resume-sidebar">
                    <p>PDF</p>
                    <a href={require('../../public/imgs/resume.pdf')} download="resume.pdf"><i class="fas fa-download"></i></a>
                </div>
            </div>
        )
    }
}

export {ResumePage as default};