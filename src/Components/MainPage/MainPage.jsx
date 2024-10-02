import React, {useEffect} from 'react';
import HeaderCarousal from "../HeaderCarousal/HeaderCarousal";
import pic1 from "../../Assets/bg2.jpg";
import pic2 from "../../Assets/bg1.jpg";
import Services from "../Services/Services";
import WhyUs from "../WhyUs/Whyus";
import Client from "../Client/Client";
import LetterHead from "../LetterHead/LetterHead";


const MainPage = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    const pic = [pic1, pic2];
    return (
        <>
            <HeaderCarousal images={pic} />
            <Services/>
            <WhyUs/>
            <Client/>
            <LetterHead/>
        </>
    );
}

export default MainPage;
