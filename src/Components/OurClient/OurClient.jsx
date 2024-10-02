import React, { useEffect, useRef } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import "../OurClient/Ourclient.css";
import client1 from "../../Assets/client1.JPG";
import client2 from "../../Assets/client2.JPG";
import client3 from "../../Assets/client8.JPG";
import client4 from "../../Assets/client3.JPG";
import client5 from "../../Assets/client4.JPG";
import client6 from "../../Assets/client5.JPG";
import client7 from "../../Assets/client6.JPG";
import client8 from "../../Assets/client7.JPG";

const OurClient = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        // Initialize AOS
        AOS.init();

        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: scrollRef.current.offsetWidth, // Scroll by container width
                    behavior: "smooth",
                });
            }
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const clients = [
        { name: "Intercontinental Hotel", image: client1 },
        { name: "Radisson Blu Hotel", image: client2 },
        { name: "Radisson Blu Hotel Apartment", image: client3 },
        { name: "Sofitel Luxury Hotels", image: client4 },
        { name: "The Retreat Hotel by M Gallery", image: client5 },
        { name: "Caesars Palace Hotel", image: client6 },
        { name: "Park Regis Kris Kin", image: client7 },
        { name: "Grosvenor House", image: client8 },
    ];

    return (
        <div className="our-clients">
            <h2 data-aos="fade-up" data-aos-duration="1000">Our Clients</h2>
            <div className="clients-scroll-container" ref={scrollRef}>
                {clients.map((client, index) => (
                    <div
                        className="client-item"
                        key={index}
                        data-aos="zoom-in" // Zoom-in effect on scroll
                        data-aos-duration="1000" // Duration of the animation
                        data-aos-delay={`${index * 200}`} // Delay based on index for staggered effect
                    >
                        <img src={client.image} alt={client.name} className="client-image"/>
                        <div className="client-name">{client.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurClient;
