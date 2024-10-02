import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import "../Client/Client.css";

// Placeholder for client logos, replace with actual imports
import client1 from "../../Assets/client1.JPG";
import client2 from "../../Assets/client2.JPG";
import client3 from "../../Assets/client3.JPG";
import client4 from "../../Assets/client4.JPG";
import client5 from "../../Assets/client5.JPG";
import client6 from "../../Assets/client6.JPG";
import client7 from "../../Assets/client7.JPG";
import client8 from "../../Assets/client8.JPG";

const OurClients = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
    }, []);

    const clients = [
        { img: client1, name: "Intercontinental Hotel" },
        { img: client2, name: "Radisson Blu Hotel" },
        { img: client3, name: "Sofitel Luxury Hotels" },
        { img: client4, name: "The Retreat Hotel" },
        { img: client5, name: "Caesars Palace" },
        { img: client6, name: "Park Regis Kris Kin" },
        { img: client7, name: "Grosvenor House" },
        { img: client8, name: "Radisson Blu Apartments" },
    ];

    return (
        <section className="our-clients-section">
            <h2 className="clients-title">Our Clients</h2>
            {clients.map((client, index) => (
                <div
                    className={`client-bar ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
                    style={{ backgroundImage: `url(${client.img})` }}
                    key={index}
                    data-aos="fade-up" // AOS animation effect
                >
                    <p className="client-name-c">{client.name}</p>
                </div>
            ))}
        </section>
    );
};

export default OurClients;
