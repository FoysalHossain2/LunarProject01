import React from 'react'
import Card from "../CommonComponent/Card";
import Button from "../CommonComponent/Button";
import "./BusinessCard.css"
import { FaAngleRight } from "react-icons/fa6";

export const BusinessCard = () => {
  return (
    <div className="BusinessPart" >
      <div className="container">
       <div className="cardWrapper">
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>
       <Card className="card"
        cardTitle="Top 5 SaaS Businesses –
        August 2021"
        cardDetails="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS   "
        >

          <Button btnStyle='businessBtn'>
             Read More <FaAngleRight className='rightAngle' />
          </Button>
        </Card>

       </div>

       <div className="nextPage">
        <p className='previous'>Previous  </p>
        <div className='pageName'>1 2 3 4 5</div>
        <span className='next'>Next</span>
      </div>
      </div>
    </div>
  );
};

export default BusinessCard;


