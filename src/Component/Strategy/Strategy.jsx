import React from 'react'
import './Strategy.css';
import Button from '../CommonComponent/Button';
import { FaAngleRight } from "react-icons/fa6";
import strategyImg from "../../assets/strategyImg.png"

const Strategy = () => {
  return (
    <div className='StrategyPart'>
        <div className="container">
           <div className="strategyWrapper">

           <div className="strategyLeftPart">
                <h2 className='strategy__title'>Why Lunar Strategy?</h2>
                <p className='strategy__desc'>To get customers, it's imperative to be seen by the mass. Every successful company is unique and needs  contrasting digital marketing strategies. Book a meeting with us and we will help you find the correct strategy for your company.</p>

                <Button btnStyle="strategyBtn">
                Book Free Meeting <FaAngleRight className='strategyIcon' />
                </Button>
            </div>
            <div className="strategyRightPart">
                <picture>
                    <img src={strategyImg} 
                    alt={strategyImg} />
                </picture>
            </div>

           </div>
        </div>
    </div>
  )
}

export default Strategy