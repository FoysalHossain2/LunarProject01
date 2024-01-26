import React from 'react';
import "./Testimonials.css";
import TestImg from "../../assets/TestImg.png";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";

function Testimonials() {
  return (
    <div className='TestimonialsPart'>
        <div className="container">
           <div className="testimonials__header">
            <h2 className='testimonials__title'>Our Testimonials</h2>
             <img src={TestImg} alt={TestImg} />
           </div>

            <div className="testimonials-CardContainer">
                <div className="testimonials-CardWrapper">
                    <div className="testimonials-Left">
                       <div className="box"></div>
                    </div>
                    <div className="testimonials-right">
                      <h4 className='testimonials__text'>Lunar Strategy helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.</h4>

                      <p className='testimonials__footerText'>— Kimmo Hakonen - Skrum Master at DaGear AB</p>

                      <div className="btn-tag">
                      <button className='leftArrow'><FaChevronLeft /></button>
                      <button className='rightArrow'><FaAngleRight /></button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;