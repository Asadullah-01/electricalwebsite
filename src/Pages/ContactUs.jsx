import React, { useEffect, useState } from "react";
import "../Pages/Css/ContactUs.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const ContactUs = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // Initialize AOS
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/send-email', { // Updated URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResponseMessage(data.message); // Set response message from server
            setFormData({
                name: '',
                email: '',
                service: '',
                message: ''
            }); // Reset form
        } catch (error) {
            setResponseMessage('An error occurred while sending the message.'); // Handle error
        }
    };

    return (
        <div className="contact-us">
            <div className="contact-header" data-aos="fade-down">
                <h1>Contact Us</h1>
                <p>Ready to experience the difference of working with a professional and customer-centric electrical and general maintenance company?</p>
                <p>Get in touch with the 4 Pillars Technical Service today. Our team is ready to assist you with your needs and provide you with a personalized solution. Your satisfaction is our guarantee, and we look forward to becoming your trusted maintenance partner.</p>
            </div>

            <div className="contact-content" data-aos="fade-up">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p><i className="fas fa-phone-alt"></i> 00971 50891 5008</p>
                    <p><i className="fas fa-envelope"></i> www.4pillarstechnicalservice.com</p>
                </div>
            </div>

            <div className="form-container" data-aos="zoom-in">
                <div className="contact-form" id="quote-form">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} required />
                        <input type="email" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />

                        <div className="form-group">
                            <label htmlFor="service">Select Service</label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                                <option value="">-- Select a Service --</option>
                                <option value="structural-fabrication">Structural Fabrication</option>
                                <option value="industrial-services">Industrial and Commercial Engineering Services</option>
                                <option value="electrical-services">Electrical Services</option>
                                <option value="general-maintenance">General Maintenance</option>
                                <option value="emergency-response">Emergency Response</option>
                            </select>
                        </div>

                        <textarea name="message" value={formData.message} placeholder="Your Message" onChange={handleChange} required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    {responseMessage && <p className="response-message">{responseMessage}</p>} {/* Display response message */}
                </div>
            </div>

            <div className="footer-banner" data-aos="fade-up">
                <p>Providing Reliable Electrical Equipment Maintenance Services Worldwide</p>
            </div>
        </div>
    );
};

export default ContactUs;
