import React from 'react';
import './HomePage.css';
import Social from '../socialLinks/social';
import self from '../img/self.jpeg';
import { TypeAnimation } from'react-type-animation';

export default function HomePage() {
    return (
        <div className="pageContent">
            <div id="mainContent">
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
                    {/* <h1 class="cutOutText">Hey there!</h1>
                    <h2>I'm Alex</h2>
                    <p>I recently graduated from Williams College with a double major in Computer Science and Studio Art. I'm currently seeking a new Software Engineer role. </p> */}
                </div>
                {/* <div class="selfieHolder">
                    <img src={self} class="selfieImg"></img>
                </div> */}
            </div>
        </div>
    )
}