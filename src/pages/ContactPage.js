import React from 'react';
import './ContactPage.css';
import Social from '../socialLinks/social';

export default function ContactPage() {
    function handleSubmit(e) {
        console.log("Sending message to creator");
    }

    return (
        <>
            <div className="mainContent" >
                <div className="glassCard" id="contactContent">
                    <h1 id="title">Say hey!</h1>
                    <form onSubmit={handleSubmit}>
                        <label id="name">Name</label>
                        <input type="text" id="name"></input>
                        
                        <label id="email">Email</label>
                        <input type="text" id="email"></input>
                        <label id="msgLabel">Message</label>
                        <textarea type="text" wrap="soft"></textarea>
                        <button type="submit" id="send">Send</button>
                    </form>
                </div>
                <Social />
            </div>
        </>
    );
    
}