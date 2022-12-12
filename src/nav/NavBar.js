import { React } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="sticky">
            <Link to="/">
            <div className="glassCard" id="logoBlob">
                <h3 id="logoText">AVCJ</h3>
            </div>
            </Link>
            <nav>
                <div className="glassCard" id="navBlob">
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
            </nav>
      </div>
    )
}