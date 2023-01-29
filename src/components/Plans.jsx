import React from 'react'
import { tab } from '@testing-library/user-event/dist/tab'
import { PlanCards } from './PlanCards'
import personal from './../images/personal.JPG'
import proff from '../images/proff.JPG'
import business from '../images/business.JPG'
import { Button } from 'bootstrap'
const Plans = () => {
  return (
    <div>
<h1>Our Plans</h1>
{/* <PlanCards/> */}
<div className="container-fluid d-flex justify-content-center">
<div className="row">
    <div className="col-md-4">
        <PlanCards imgsrc={personal} cardtitle="Personal" savetext="Save $10" buttonText='2'description='Maximum accounts you can track:'/>
    </div>
    <div className="col-md-4">
    <PlanCards imgsrc={proff} cardtitle="Professional" savetext="Save $20" buttonText='2' description='Maximum accounts you can track:'/>
    </div>
    <div className="col-md-4">
    <PlanCards imgsrc={business} cardtitle="Business" savetext="Save $50" buttonText='3' description='Maximum accounts you can track:'/>
    </div>
</div> 
</div>
    </div>
  )
}

export default Plans