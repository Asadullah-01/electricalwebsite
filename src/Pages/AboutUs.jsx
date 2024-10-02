import React, { useEffect } from "react";
import "../Pages/Css/Aboutus.css";
import { FaStar, FaCheckCircle, FaTools, FaUsers } from "react-icons/fa";
import OurClient from "../Components/OurClient/OurClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry, faWrench } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const AboutUs = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    useEffect(() => {
        AOS.init(); // Initialize AOS animations
    }, []);

    return (
        <>
            <div className="about-us">
                {/* About Us Header */}
                <div className="about-us-header" data-aos="fade-down">
                    <h1>About Us</h1>
                </div>

                {/* Company History */}
                <div className="about-us-history" data-aos="fade-up">
                    <h2>Our History</h2>
                    <p>
                        HONG KONG ELECTRICAL EQUIPMENT MAINTENANCE Company was established in the year 2002,
                        since then we have been delivering excellence in the field of construction & hospitality
                        industry. Our workshop is equipped with sophisticated machinery to fulfill our carried-out jobs.
                        Our job shop is facilitated for all kinds of mechanical jobs, and by the effort of highly
                        experienced workers, we have achieved many intricate levels of projects.
                    </p>
                </div>

                {/* Mission and Vision */}
                <div className="about-us-mission-vision">
                    <div className="mission" data-aos="fade-right">
                        <h2>Our Mission</h2>
                        <p>To deliver exceptional services with integrity and commitment to customer satisfaction.</p>
                    </div>
                    <div className="vision" data-aos="fade-left">
                        <h2>Our Vision</h2>
                        <p>To be the leading provider of technical services, recognized globally for quality and innovation.</p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="why-choose-us" data-aos="zoom-in">
                    <h1>Why Choose Us</h1>
                    <div className="choice-box">
                        <div className="choice-item" data-aos="fade-up-right">
                            <FaCheckCircle /> Expertise
                        </div>
                        <div className="choice-item" data-aos="fade-up-left">
                            <FaStar /> Quality Assurance
                        </div>
                        <div className="choice-item" data-aos="fade-up-right">
                            <FaUsers /> Customer-Centric Approach
                        </div>
                        <div className="choice-item" data-aos="fade-up-left">
                            <FaTools /> Safety First
                        </div>
                        <div className="choice-item" data-aos="fade-up-right">
                            <FaStar /> Efficiency
                        </div>
                        <div className="choice-item" data-aos="fade-up-left">
                            <FaCheckCircle /> Competitive Pricing
                        </div>
                    </div>
                </div>

                {/* Our Services */}
                <div className="our-services-section-unique">
                    <h2 className="services-title-unique" data-aos="fade-down">Our Services</h2>
                    <div className="services-container-unique">
                        <div className="service-card-unique" data-aos="flip-left">
                            <FontAwesomeIcon icon={faWrench} className="service-icon-unique"/>
                            <h3>Emergency Response</h3>
                            <p>We provide 24/7 emergency response services for urgent electrical and maintenance needs.</p>
                        </div>
                        <div className="service-card-unique" data-aos="flip-up">
                            <FontAwesomeIcon icon={faIndustry} className="service-icon-unique"/>
                            <h3>General Maintenance</h3>
                            <p>Our general maintenance services encompass plumbing repairs, HVAC maintenance, and more.</p>
                        </div>
                        <div className="service-card-unique" data-aos="flip-right">
                            <FontAwesomeIcon icon={faIndustry} className="service-icon-unique"/>
                            <h3>Electrical Services</h3>
                            <p>From wiring and lighting installations to electrical panel upgrades, we handle it all.</p>
                        </div>
                    </div>
                    <Link to="/services" className="explore-button-unique" data-aos="fade-up">Explore More</Link>
                </div>

                {/* Our Clients Section */}
                <OurClient data-aos="fade-up"/>
            </div>
        </>
    );
};

export default AboutUs;
