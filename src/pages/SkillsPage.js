import React from 'react';
import Social from '../socialLinks/social';
import './SkillsPage.css';

export default function SkillsPage() {
    return (
        <>
            <div className="glassCard" id="mainContent">
                <h1 id="title">Skills</h1>
                <div className="skills glassCard" id="csci">
                    <h2>Computer Science</h2>
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
                <div className="skills glassCard" id="art">
                    <h2>Studio Art</h2>
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
        </>
    )
}