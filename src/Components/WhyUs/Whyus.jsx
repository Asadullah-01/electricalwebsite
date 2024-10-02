import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import "../WhyUs/Whyus.css";

const WhyUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <div className="why-us-section" data-aos="fade-up">
            <h2 className="why-us-title" data-aos="fade-down">Why Choose Us?</h2>
            <div className="why-us-container">
                <div className="why-us-card" data-aos="zoom-in" data-aos-delay="100">
                    <h3>Expertise</h3>
                    <p>Our team comprises highly skilled professionals with years of industry experience.</p>
                </div>
                <div className="why-us-card" data-aos="zoom-in" data-aos-delay="200">
                    <h3>Quality Assurance</h3>
                    <p>We ensure the highest standards of quality in all our services and products.</p>
                </div>
                <div className="why-us-card" data-aos="zoom-in" data-aos-delay="300">
                    <h3>Customer Satisfaction</h3>
                    <p>Your satisfaction is our top priority. We strive to exceed your expectations.</p>
                </div>
            </div>
            <div className="why-us-description" data-aos="fade-up" data-aos-delay="400">
                <p>We are committed to providing top-notch services that meet your needs.</p>
            </div>
        </div>
    );
};

export default WhyUs;
