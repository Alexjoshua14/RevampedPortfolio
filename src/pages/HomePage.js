import React from 'react';
import './HomePage.css';
import Social from '../socialLinks/social';
import self from '../img/self.jpeg';
import { TypeAnimation } from'react-type-animation';

export default function HomePage() {
    return (
        <div className="mainContent">
            <div className="glassCard" id="welcomeCard">
                <TypeAnimation 
                    sequence={[
                        "Hey there!"
                    ]}
                    wrapper="h1"
                    cursor={false}
                />
                <TypeAnimation 
                    sequence={[
                        1000,
                        "I'm Alex"
                    ]}
                    wrapper="h2"
                    cursor={false}
                    />
                <TypeAnimation
                    sequence={[
                        2000,
                        "I recently graduated from Williams College with a double major in Computer Science and Studio Art. I'm currently seeking a new Software Engineer role. "
                    ]}
                    wrapper="p"
                    cursor={false}  
                    speed={60}
                />
            </div>
            {/* <div class="selfieHolder">
                <img src={self} class="selfieImg"></img>
            </div> */}
            <Social />
        </div>
    )
}