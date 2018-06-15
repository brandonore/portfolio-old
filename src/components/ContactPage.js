import React from 'react';
import ContactForm from './ContactForm';
import Particles from 'react-particles-js';

class ContactPage extends React.Component {

    render() {
        return (
            <div className="contact-div">
                <h1>Contact</h1>
                <ContactForm />
                <Particles width="90%"
                    params={{
                        particles: {
                            number: {
                                value: 100
                            },
                            line_linked: {
                                opacity: 0.5,
                                color: '#9EA0AA',
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

export default ContactPage;