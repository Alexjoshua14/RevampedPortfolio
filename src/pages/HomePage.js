import React from 'react';
import './HomePage.css';
import Social from '../socialLinks/social';
import self from '../img/self.jpeg';
import { TypeAnimation } from'react-type-animation';

export default function HomePage() {
    return (
        <div className="container-fluid">
            <div className="row" id="main-title">
                <h2>Hey, I'm</h2>
                <h1>Alex Joshua</h1>
            </div>
            {/* <div class="selfieHolder">
                <img src={self} class="selfieImg"></img>
            </div> */}
        </div>
    )
}