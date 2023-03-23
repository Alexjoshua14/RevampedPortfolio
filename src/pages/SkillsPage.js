import React from 'react';
import Social from '../socialLinks/social';
import './SkillsPage.css';

export default function SkillsPage() { 
    return (
        <>
            <div className="container">
                <div className="row skills-page-title" >
                    <h1 id="title">Skills</h1>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-xs-12 g-4">
                        <div className="row skills-title">
                            <h2>Computer Science</h2>
                        </div>
                        <div className="row skills-list">
                            <ul>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>HTML+CSS</li>
                                <li>C</li>
                                <li>Rust</li>
                                <li>Python</li>
                                <li>Bash</li>
                                <li>Git & Mercurial</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-12 g-2 g-sm-4">
                        <div className="row skills-title">
                            <h2>Studio Art</h2>
                        </div>
                        <div className="row skills-list">
                            <ul>
                                <li>Architecture</li>
                                <li>Charcoal Drawing</li>
                                <li>Multimedia Sculpture</li>
                                <li>Quilting</li>
                                <li>Adobe Illustrator</li>
                                <li>Risograph Printing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}