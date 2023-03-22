import React from 'react';
import './HomePage.css';
import Social from '../socialLinks/social';
import self from '../img/self.jpeg';
import { TypeAnimation } from'react-type-animation';

export default function HomePage() {
    return (
        <div className="container-fluid mainContent">
            <div className="row" id="main-title">
                Hey, I'm
                <br/>Alex Joshua
            </div>
            {/* <div class="selfieHolder">
                <img src={self} class="selfieImg"></img>
            </div> */}
        </div>
    )
}