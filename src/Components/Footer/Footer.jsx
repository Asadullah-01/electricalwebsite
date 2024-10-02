import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa"; // Using a relevant icon for now

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo-title">
                    {/* Replace with company logo when ready */}
                    <FaTools className="footer-icon" />
                    <div className="footer-title">
                        <p>Hong Kong Electrical Equipment Maintenance</p>
                    </div>
                </div>
                <div className="footer-links-container">
                    <ul className="footer-links">
                        <Link to="/aboutus"><li>About Us</li></Link>
                        <Link to="/services"><li>Services</li></Link>
                        <Link to="/contactus"><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <hr />
                <p>© 2024 Hong Kong Electrical Equipment Maintenance. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
