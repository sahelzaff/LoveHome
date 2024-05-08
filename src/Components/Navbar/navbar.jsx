import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './navbar.css';

const Navbar = () => {
    const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
    const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
    const [logoVisible, setLogoVisible] = useState(false); 

    const toggleServicesDropdown = () => {
        setServicesDropdownVisible(!servicesDropdownVisible);
    };

    const toggleAboutDropdown = () => {
        setAboutDropdownVisible(!aboutDropdownVisible);
    };

    const closeDropdowns = () => {
        setServicesDropdownVisible(false);
        setAboutDropdownVisible(false);
    };

    
    const revealLogo = () => {
        setLogoVisible(true);
    };

    return (
        <div className={`navbar ${logoVisible ? 'reveal' : ''}`} onMouseLeave={closeDropdowns}>
            <img src={assets.logo} alt="Logo" className={`logo ${logoVisible ? 'visible' : ''}`} onLoad={revealLogo} />
            <ul className="navbar-menu">
                <li onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
                    <a href="#">Process</a>
                    <img src={assets.arrow} className={`arrow ${servicesDropdownVisible ? 'down' : 'up'}`} alt="Arrow" />
                    {servicesDropdownVisible && (
                        <ul className="dropdown">
                            <li><a href="">Buying</a></li>
                            <li><a href="">Selling</a></li>
                        </ul>
                    )}
                </li>
                <li onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>
                    <a href="#">Service</a>
                    <img src={assets.arrow} className={`arrow ${aboutDropdownVisible ? 'down' : 'up'}`} alt="Arrow" />
                    {aboutDropdownVisible && (
                        <ul className="dropdown">
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Free Resource</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <button className="quote"> Call Now 02-9381-9118</button>
        </div>
    );
};

export default Navbar;
