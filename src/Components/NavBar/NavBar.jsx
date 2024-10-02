import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon
import "../NavBar/Navbar.css";

const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="NavBar">
            <div className="top-bar">
                <div className="logo">
                    <h1>HongKong Electrical</h1> {/* Simplified logo text */}
                </div>
                <div className="contact-info">
                    <div className="phone-info">
                        <FaPhoneAlt className="phone-icon" />
                        <span>+971 123 456 789</span>
                    </div>
                    <Link to="/contactus#quote-form">
                        <button className="contact-button">Get a Quote</button>
                    </Link>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="nav-items">
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <div
                        className="services-dropdown"
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                    >
                        <Link to="/services">Services</Link>
                        {dropdown && (
                            <div className="dropdown-content">
                                <Link to="/services">Structural Fabrication</Link>
                                <Link to="/services">Industrial & Commercial Engineering Services</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/contactus">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
