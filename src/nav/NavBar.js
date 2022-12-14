import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    // const [openDrawer, toggleDrawer] = useState(false);

    // useEffect(() => {
        
    // })


    function displayNav() {
        console.log("You cannot leave.");
        var navLinks = document.getElementById("navLinks");
        var nBlob = document.getElementById("navBlobSmall");
        if (navLinks.style.display = "none") {
            console.log("expanding!");
            navLinks.style.display = "flex";
            nBlob.display =  "flex";
            nBlob.width = "75vw";
            nBlob.background = "var(--dark)";
            nBlob.color = "var(--white)";
        } else {
            nBlob.display =  "flex";
            nBlob.width = "60px";
            nBlob.overflow = "hidden";
            nBlob.background = "var(--dark)";
            nBlob.color = "var(--white)";
            navLinks.style.display = "none";
        }
    }

    return (
        <div className="sticky">
            <Link to="/">
            <div className="glassCard" id="logoBlob">
                <h3 id="logoText">AVCJ</h3>
            </div>
            </Link>
            <nav>
                <div className="glassCard navBlob" id="navBlobLarge">
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/portfolio">Artwork</Link></li>
                    </ul>
                </div>
                <div className="glassCard navBlob" id="navBlobSmall">
                    <a onClick={displayNav}>
                        <i className="fa fa-bars" />
                    </a>

                    <ul id="navLinks">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/portfolio">Artwork</Link></li>
                    </ul>
                </div>
            </nav>
      </div>
    )
}