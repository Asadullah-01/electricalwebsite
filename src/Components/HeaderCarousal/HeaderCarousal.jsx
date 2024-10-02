import React, { useState, useEffect } from 'react';
import "../HeaderCarousal/HeaderCarousal.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const HeaderCarousal = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, [images.length]);

    return (
        <div className="header-section" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <div className="header-content" data-aos="fade-up">
                <h1 data-aos="fade-up">Hong Kong Electrical Equipment Maintenance</h1>
                <p data-aos="fade-left">Reliable Industrial & Fabrication Solutions in UAE</p>
                {/* Directly use Link without an anchor tag */}
                <Link to="services" className="cta-button" data-aos="zoom-in">Learn More</Link>
            </div>
        </div>
    );
}

export default HeaderCarousal;
