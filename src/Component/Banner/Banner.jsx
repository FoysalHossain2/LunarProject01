import React from 'react'
import "./Banner.css"
import banner from "../../assets/banner.png"
import Group from "../../assets/Group.png"
import saas from "../../assets/saas.png"
import Fiver from "../../assets/Fiver.png"
import Button from '../CommonComponent/Button'

const Banner = () => {
  return (
    <div className='BannerPart'>
        <div className="container">
          <div className="bannerWrapper">
            <di className="bannerLeftText">
              <h1 className='bannerHeadText'>
                 <span className='helpGrow'>We help you grow</span> your <span className='conversionsColor'>conversions.</span>
               </h1>
                <p className='bannerTitle'>Featured in leading publications around the world</p>
              <picture>
                <div className="allIcon">
                <img src={Group} alt={Group} />
                <img src={saas} alt={saas} className='saas' />
                <img src={Fiver} alt={Fiver} className='Fiver'  />
                </div>
              </picture>
              <Button btnStyle="cBtn" btnContent="Contact Us" />
            </di>
            <div className="bannerRightPart">
              <picture>
              <img  src={banner} alt={banner} className='bannerImg ' />
              </picture>
            </div>
           </div>  
        </div>
    </div>

  )
}

export default Banner