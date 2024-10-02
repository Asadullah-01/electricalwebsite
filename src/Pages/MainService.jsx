import React ,{useEffect} from 'react';
import "../Pages/Css/MainService.css";

// Import icons (use appropriate icon library like FontAwesome or similar)
import { FaIndustry, FaWrench, FaCog, FaHammer, FaPencilRuler, FaTruck, FaFan, FaWarehouse, FaToolbox, FaTools, FaHardHat, FaRegLightbulb } from 'react-icons/fa';

const ServicesPage = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return (
        <div className="services-page">
            {/* Fabrication Services Section */}
            <section className="service-section fabrication-services">
                <h2 className="service-title">Fabrication Services</h2>
                <div className="service-items">
                    <div className="service-item" data-aos="fade-right">
                        <FaHammer className="service-icon-m" />
                        <h3>Structural Fabrication</h3>
                        <p>We specialize in structural fabrication for various industries, ensuring durable and reliable frameworks.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaPencilRuler className="service-icon-m" />
                        <h3>Hand Railings & Steel Fences</h3>
                        <p>We provide custom hand railings and steel fences with precision fabrication and installation.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaTruck className="service-icon-m" />
                        <h3>Platforms & Gangways</h3>
                        <p>Our team delivers safe and efficient platforms and gangways tailored to your requirements.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaWarehouse className="service-icon-m" />
                        <h3>Cat Ladders</h3>
                        <p>Custom-made cat ladders for safe and secure access in industrial settings.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaRegLightbulb className="service-icon-m" />
                        <h3>Custom Fabrication</h3>
                        <p>Tailored fabrication solutions to meet specific project requirements and specifications.</p>
                    </div>
                </div>
            </section>

            {/* Industrial Services Section */}
            <section className="service-section industrial-services" >
                <h2 className="service-title">Industrial Services</h2>
                <div className="service-items">
                    <div className="service-item" data-aos="fade-right">
                        <FaFan className="service-icon-m" />
                        <h3>Foundry Services</h3>
                        <p>We offer top-quality foundry services for custom metal casting and fabrication projects.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaCog className="service-icon-m" />
                        <h3>Motor Winding & Pump Overhauling</h3>
                        <p>Expert motor winding and pump overhauling services to keep your systems running efficiently.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaIndustry className="service-icon-m" />
                        <h3>Machining Work & Dynamic Balance</h3>
                        <p>High-precision machining and dynamic balancing for optimal industrial performance.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaWrench className="service-icon-m" />
                        <h3>Pipeline Installation & Cladding</h3>
                        <p>Expert pipeline installation and insulation, including pipe and wall cladding for long-term protection.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaToolbox className="service-icon-m" />
                        <h3>Ducting Fabrication & Erection</h3>
                        <p>We provide complete ducting fabrication and erection services for industrial environments.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaTools className="service-icon-m" />
                        <h3>Preventive Maintenance</h3>
                        <p>Regular preventive maintenance services to minimize downtime and ensure operational efficiency.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaWrench className="service-icon-m" />
                        <h3>Machine Installation</h3>
                        <p>Professional installation services for various industrial machines and equipment.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaHardHat className="service-icon-m" />
                        <h3>Safety Audits</h3>
                        <p>Comprehensive safety audits to ensure compliance with industry regulations and standards.</p>
                    </div>
                </div>
            </section>

            {/* Generalized Technical Services Section */}
            <section className="service-section technical-services"  >
                <h2 className="service-title">Generalized Technical Services</h2>
                <div className="service-items">
                    <div className="service-item" data-aos="fade-right">
                        <FaCog className="service-icon-m" />
                        <h3>Electrical Services</h3>
                        <p>From wiring to complex installations, our electrical services ensure safe and efficient systems.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaWrench className="service-icon-m" />
                        <h3>General Maintenance</h3>
                        <p>Comprehensive maintenance services to keep your operations running smoothly and effectively.</p>
                    </div>
                    <div className="service-item" data-aos="fade-right">
                        <FaCog className="service-icon-m" />
                        <h3>Emergency Response</h3>
                        <p>24/7 emergency response services for technical or maintenance issues that need swift attention.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
