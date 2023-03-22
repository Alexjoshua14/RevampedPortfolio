import React, { state, useState } from 'react';
import './ContactPage.css';
import Social from '../socialLinks/social';
import { send } from 'emailjs-com';

export default function ContactPage() {
    const [toSend, setToSend] = useState({
        name: "",
        message: "",
        email: "",
    });

    const handleChange = (e) => {
        setToSend((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        console.log("Sending message to creator");

        e.preventDefault(); 
        send(
            'service_atisjtd',
            'template_2hsgujo',
            toSend,
            '89GlvH1YRqI53BXU7'
        )
            .then((response) => {
                console.log('Email sent!', response.status, response.text);
                setToSend({name: "", message: "", email: ""});
            }).catch((err) => {
                console.log('Email failed to send..', err);  
            });
    }

    return (
        <>
            <div className="container-fluid" >
                <div className="row">
                    <h1 id="title">Say hey!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-5">
                        <form class="needs-validation" onSubmit={handleSubmit} novalidate>
                            <div class="mb-3">
                                <label className="form-label" id="name">Name</label>
                                <input className="form-control" type="text" name="name" value={toSend["name"]} onChange={handleChange} aria-required="true" required></input>
                            </div>
                            <div class="mb-3">
                                <label className="form-label" id="email">Email</label>
                                <input className="form-control" type="email" name="email" value={toSend["email"]} onChange={handleChange} aria-required="true" required></input>
                                {/* <div className="invalid-feedback">
                                    Please enter a valid email
                                </div> */}
                            </div>

                            <div class="mb-3">
                                <label className="form-label" id="msgLabel">Message</label>
                                <textarea className="form-control" type="text" wrap="soft" name="message" value={toSend["message"]} onChange={handleChange} aria-required="true" rows="5" required></textarea>
                                {/* <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div> */}
                            </div>

                            <button className="btn btn-primary submit-btn" type="submit" id="send">Send</button>
                        </form> 
                    </div>
                </div>
            </div>
        </>
    );
    
}