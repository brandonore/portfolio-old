import React from 'react';
import ContactForm from './ContactForm';

class ContactPage extends React.Component {

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
            <div className="contact-div">
                <a href="#" id="menu-btn" onClick={this.openNav}><i class="far fa-bars"></i></a>
                <h1>Contact</h1>
                <ContactForm />
            </div>
        )
    }
}

export default ContactPage;