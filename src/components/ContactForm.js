import React from 'react';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class ContactForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: 'POST',
            url: 'https://rocky-anchorage-67021.herokuapp.com/send',
            data: {
                name,
                email,
                message
            }
        }).then((response) => {
            if(response.data.msg === 'success') {
                console.log('message sent!');
                this.resetForm();
            } else if(response.data.msg === 'fail') {
                console.log('message failed to send');
            }
        });
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    hidePlaceholderLabels() {
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
        [].forEach.call(inputs, input => {
            const label = document.querySelector(`[for="${input.id}"]`);
            input.addEventListener('input', function () {
                if (this.value && this.value.length > 0) {
                    label.setAttribute('hidden', '');
                } else {
                    label.removeAttribute('hidden');
                }
            });
        });
    }

    render() {
        return (
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="contact-title"><h3>Get in touch!</h3></div>
                <div className="form-group">
                    <br/>
                    <input type="text" name="name" className="form-control" id="name" onChange={this.hidePlaceholderLabels.bind(this)}></input>
                    <label htmlFor="name">Name</label>
                </div>

                <div className="form-group">
                    <br/>
                    <input type="email" name="email" className="form-control" id="email" onChange={this.hidePlaceholderLabels.bind(this)}></input>
                    <label htmlFor="email">Email</label>
                </div>

                <div className="form-group">
                    <br/>
                    <textarea name="message" className="form-control" rows="8" cols="50" id="message" onChange={this.hidePlaceholderLabels.bind(this)}></textarea>
                    <label htmlFor="message">Message</label>
                </div>

                <button type="submit" className="btn-contact"><FontAwesomeIcon icon={['fas', 'paper-plane']} /></button>
            </form>
        )
    }
}

export default ContactForm;