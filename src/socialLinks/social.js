import React from 'react';
import './social.css';

export default function Social() {
    return (
        <div className="container">
            <div className="row social-row">
                <div className="col">
                    <a href="https://github.com/Alexjoshua14" target="_blank">
                        <i className="fa-brands fa-github"/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.instagram.com/aartistry14/" target="_blank">
                        <i className="fa-brands fa-instagram"/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.linkedin.com/in/alexander-joshua/" target="_blank">
                        <i className="fa-brands fa-linkedin"/>
                    </a>
                </div>
            </div>
        </div>
    )
} 