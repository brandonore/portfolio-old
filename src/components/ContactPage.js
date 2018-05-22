import React from 'react';
import ContactForm from './ContactForm';

class ContactPage extends React.Component {

    render() {
        return (
            <div className="contact-div">
                <h1>Contact</h1>
                <ContactForm />
            </div>
        )
    }
}

export default ContactPage;