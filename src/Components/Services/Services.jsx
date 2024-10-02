import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faIndustry } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import "../Services/Services.css"; // Updated file name

const OurServices = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (
        <div className="our-services-section-unique" data-aos="fade-up">
            <h2 className="services-title-unique" data-aos="fade-down">Our Services</h2>
            <div className="services-container-unique">
                <div className="service-card-unique" data-aos="zoom-in" data-aos-delay="100">
                    <FontAwesomeIcon icon={faWrench} className="service-icon-unique" />
                    <h3>Fabrication</h3>
                    <p>Custom metal fabrication solutions tailored to your needs.</p>
                </div>
                <div className="service-card-unique" data-aos="zoom-in" data-aos-delay="200">
                    <FontAwesomeIcon icon={faIndustry} className="service-icon-unique" />
                    <h3>Industrial Services</h3>
                    <p>Comprehensive maintenance and repair for industrial equipment.</p>
                </div>
            </div>
            <Link to="/services" className="explore-button-unique" data-aos="fade-up" data-aos-delay="300">Explore More</Link>
        </div>
    );
};

export default OurServices;
