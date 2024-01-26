import React from 'react'
import "./DigitalMarketing.css";
import Button from '../CommonComponent/Button';
import { FaAngleRight } from "react-icons/fa6";

function DigitalMarketing() {
  return (
    <div className='DigitalMarketing__part'>
        <div className="container">
            <div className="DigitalM__wrapper">
                <div className="DigitalM__leftPart">
                    <h3 className='DMtitle'> <span>Digital Marketing </span> Articles</h3>
                </div>
                <div className="DigitalM-rightPart">
                    <div className="DM__cardInner">
                        <h4 className='dM__text'>Top 5 SaaS Businesses –August 2021</h4>
                        <p className='BStitleCard'>Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS</p>

                        <Button btnStyle='DMbtn'>
                             Read More <FaAngleRight className='rightAngle' />
                         </Button>
                    </div>
                    <div className="DM__cardInner12">
                        <h4 className='dM__text'>12 Best SaaS WordPress Themes To Convert Lead</h4>
                        <p className='BStitleCard12'> Lead conversion is an essential goal for any business. Be it converting site visitors into members, increasing their email subscription list, or converting members into </p>
                        <Button btnStyle='DMbtn'>
                             Read More <FaAngleRight className='rightAngle' />
                         </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DigitalMarketing