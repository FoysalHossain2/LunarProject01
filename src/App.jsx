import React from "react";
import Menu from "./Component/Menu/Menu.jsx/Menu";
import Banner from "./Component/Banner/Banner";
import BusinessCard from "./Component/BusinessCard/BusinessCard";
import Consultation from "./Component/Consultation/Consultation";
import Testimonials from "./Component/Testimonials/Testimonials";
import DigitalMarketing from "./Component/DigitalMarketing/DigitalMarketing";
import Strategy from "./Component/Strategy/Strategy";
import Footer from "./FooterPart/Footer";

function App() {
  return (
    <>
    <Menu/>
    <Banner/>
    <BusinessCard/>
    <Consultation/>
    <Testimonials/>
    <DigitalMarketing/>
    <Strategy/>
    <Footer/>
    </>
  );
}

export default App;
