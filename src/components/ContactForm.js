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

    hidePlaceholderLabels(text) {
        let labels = document.getElementsByTagName('LABEL');
        for(let i = 0; i < labels.length; i++) {
            if(labels[i].innerHTML == text) {
                labels[i].classList.add('hidden');
            } else {
                labels[i].classList.remove('hidden');
            }
        }
    }

    render() {
        return (
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="contact-title"><h3>Contact Me!</h3></div>
                <div className="form-group">
                    <br/>
                    <input type="text" name="name" onChange={this.hidePlaceholderLabels} className="form-control" id="name"></input>
                    <label htmlFor="name">Name</label>
                </div>

                <div className="form-group">
                    <br/>
                    <input type="email" name="email" onChange={this.hidePlaceholderLabels} className="form-control" id="email"></input>
                    <label htmlFor="email">Email</label>
                </div>

                <div className="form-group">
                    <br/>
                    <textarea name="message" className="form-control" rows="8" cols="50" id="message"></textarea>
                    <label htmlFor="message">Message</label>
                </div>

                <button type="submit" className="btn-contact"><i class="fas fa-paper-plane"></i></button>
            </form>
        )
    }
}

export default ContactForm;