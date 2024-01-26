import React from 'react'
import "./Consultation.css";
// import Consultation from "../../assets/bgCommon.png";

function Consultation() {
  return (
    <div className="consultation-part">
    <div className="container">
       <div className="consultation__Wrapper">
       <div className="consultation__leftPart">
            <h2 className='consultation__text' >Book A Free Digital Marketing Consultation</h2>
        </div>
        <div className="consultation__rightPart">
            <input type="text" id='email' name='email'className='inputEmail' placeholder='Your Email' />
            <button className='consultationBtn'>Book my free meeting</button>
        </div>
       </div>
    </div>
</div>
  )
}

export default Consultation;