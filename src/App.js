import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import TimeCounter from "./Components/TimeCounter/TimeCounter";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import MainPage from "./Components/MainPage/MainPage";
import ServicesPage from "./Pages/MainService";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Loader from "./Components/Loader/Loader";


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out',
            offset: 100,
            mirror: true,
            throttleDelay: 50
        });
    }, []);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            <BrowserRouter>
                    <>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="aboutus" element={<AboutUs />} />
                            <Route path="contactus" element={<ContactUs />} />
                            <Route path="services" element={<ServicesPage />} />
                        </Routes>
                        <Footer />
                    </>

            </BrowserRouter>
        </>
    );
}

export default App;
