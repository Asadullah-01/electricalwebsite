import React, { useState } from 'react';
import "../LetterHead/LetterHead.css"; // Import styling
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Letterhead = () => {
    // Initialize AOS
    React.useEffect(() => {
        AOS.init({ duration: 1000 }); // Set the duration for animations
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);

        fetch('/api/send-email', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    };

    return (
        <div className="letterhead-section" data-aos="fade-up">
            <h2 className="letterhead-title" data-aos="fade-down">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="letterhead-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    data-aos="zoom-in"
                />
                <input
                    type="email"
                    className="letterhead-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-aos="zoom-in"
                />
                <a href="#" className="letterhead-button" onClick={handleSubmit} data-aos="fade-up">Submit</a>
            </form>
        </div>
    );
};

export default Letterhead;