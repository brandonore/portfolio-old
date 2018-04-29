import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: 'POST',
            url: 'http://localhost:3001/send',
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

    render() {
        return (
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" id="name"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="form-control" id="email"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input type="textarea" name="message" className="form-control" rows="5" id="message"></input>
                </div>

                <button type="submit" className="btn-contact">Submit</button>
            </form>
        )
    }
}

export default ContactForm;