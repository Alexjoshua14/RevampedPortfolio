import React from 'react';
import "./AboutPage.css";
import Social from '../socialLinks/social';

export default function AboutPage() {
    return (
        <>
            <div className="mainContent">
                <div className="glassCard" id="AboutContent">
                    <h1 className="cardTitle">Hey, I'm Alex Joshua!</h1>
                    <div className="cardBody">
                        <p>
                            I'm a software engineer 
                            and artist currently living in Redwood City, CA but originally from Ferndale, WA.
                            I'm currently beginning my career in the 
                            tech industry after graduating from Williams 
                            College with a double-major in Computer 
                            Science and Studio Art in 2022.                    
                        </p>
        
                        <p>
                            While I'm still trying to figure out exactly what I want to do within the tech industry,
                            I know that I am passionate about making a positive societal impact. Throughout my academic journey
                            I took classes in a diverse array of subjects including: studio arts, sociology, astrophysics,
                            philosophy, and computer science. From this liberal arts perspective I have been able to approach the tech industry
                            from a well rounded point of view. When I work on software I am always conscience of not just what the end result may
                            look like, but how it may impact the users. This includes actively working to avoid implicit biases, promoting accesibility, 
                            as well as ensuring that the code itself is comprehensible for any future developer.               
                        </p>

                        <p>
                            I hope to have the chance to chat with you sometime soon!
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    )
}