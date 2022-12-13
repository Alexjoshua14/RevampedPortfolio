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
                window.location.reload();
            }).catch((err) => {
                console.log('Email failed to send..', err);  
            });
    }

    return (
        <>
            <div className="mainContent" >
                <div className="glassCard" id="contactContent">
                    <h1 id="title">Say hey!</h1>
                    <form onSubmit={handleSubmit}>
                        <label id="name">Name</label>
                        <input type="text" name="name" value={toSend["name"]} onChange={handleChange} required></input>
                        
                        <label id="email">Email</label>
                        <input type="text" name="email" value={toSend["email"]} onChange={handleChange} required></input>

                        <label id="msgLabel">Message</label>
                        <textarea type="text" wrap="soft" name="message" value={toSend["message"]} onChange={handleChange} required></textarea>

                        <button type="submit" id="send">Send</button>
                    </form>
                </div>
                <Social />
            </div>
        </>
    );
    
}