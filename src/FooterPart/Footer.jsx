import React from 'react'
import "./Footer.css"
import footerLogo from "../assets/footerLogo.png"

function Footer() {
  return (
    <div className='footerPart'>
      <div className="container">
        <div className="footer__headerWrapper">
         <div className="footer__logoPart">
         <picture>
            <img src={footerLogo} alt={footerLogo} title="logo" />
          </picture>
          <div className='logo__desc'>
          <ul>
            <li><a href="#" className='Reborn'> REBORN STUDIO AB </a></li>
            <li><a href="#"> Org.nr: 559264-1871 </a></li>
            <li><a href="#"> Lunar Holding LDA </a></li>
            <li><a href="#"> info@lunarstrategy.com </a></li>
            <li><a href="#"> +467-20478390 </a></li>
          </ul>
          </div>
         </div>

          <div className="company__name">
            <h5 className='title'>Company</h5>
           <div className='company__desc'>
           <ul>
              <li><a href="#"> Home </a></li>
              <li><a href="#"> About Us </a></li>
              <li><a href="#"> Lunar Blog </a></li>
              <li><a href="#"> Our Specialists </a></li>
              <li><a href="#"> Contact Us </a></li>
              <li><a href="#"> Privacy & Policy </a></li>
            </ul>
           </div>
          </div>

          <div className="company__name">
            <h5 className='title'>Services</h5>
           <div className='company__desc'>
           
           <ul>
              <li><a href="#"> Digital Marketing </a></li>
              <li><a href="#"> Free Audit </a></li>
              <li><a href="#"> Google Ads </a></li>
              <li><a href="#"> Cryptocurrency Marketing </a></li>
              <li><a href="#"> SEO </a></li>
              <li><a href="#"> SAAS Marketing </a></li>
              <li><a href="#"> Website & SEO </a></li>
            </ul>
           </div>
          </div>

          <div className="Podcast">
            <h5 className='podcast__title'>Podcast</h5>
           <div> <div className='imgBox'></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer