import { React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const SM_SCREEN_MAX_WIDTH = 576;

    const collapse = () => {
        if (window.innerWidth < SM_SCREEN_MAX_WIDTH) 
            document.getElementById("collapse-button").click();
    }

    return (
        <nav className="navbar navbar-expand-sm sticky-top shadow-sm"> 
            <div className="container-fluid">
                <NavLink to="/" className="nav-link navbar-brand active" id="navbar-logo">
                    AVCJ
                </NavLink>
                <button className="navbar-toggler navbar-button" 
                    type="button" 
                    id="collapse-button"
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <i className="fa fa-bars collapse-icon" aria-hidden="true"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <NavLink to="/about" className="nav-option nav-link" onClick={collapse}>
                        About
                    </NavLink>
            
                    <NavLink to="/skills" className="nav-link nav-option" onClick={collapse}>
                        Skills
                    </NavLink>
        
                    <NavLink to="/portfolio" className="nav-link nav-option" onClick={collapse}>
                        Artwork
                    </NavLink>
        
                    <NavLink to="/contact" className="nav-link nav-option" onClick={collapse}>
                        Contact
                    </NavLink>
                </div>
            </div>
            
        </nav>
    )
}



/*

<div className="container sticky">
            <div className="row">
                <div className="col">
                    <Link to="/">
                    <div className="glassCard" id="logoBlob">
                        <h3 id="logoText">AVCJ</h3>
                    </div>
                    </Link>
                </div>
                <div className="col">
                    <nav>
                        <div className="glassCard navBlob" id="navBlobLarge">
                            {navOptions()}
                        </div>
                        <div className="glassCard navBlob" id="navBlobSmall">
                            {/* <a onClick={displayNav}>
                                <i className="fa fa-bars" />
                            </a> }
                            {navOptions()}
                        </div>
                    </nav>
                </div>
            </div>
      </div>



*/