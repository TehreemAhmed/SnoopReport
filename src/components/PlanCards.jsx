import React from 'react'
// import {personal , proff, business} from '../images/personal.jpg'
 import personal from "../images/personal.JPG"
import './PlanCards-styles.css'
export const PlanCards = props => {
  return (
   
  <div className="card text">
    <div className="overflow">
        <img src={props.imgsrc} alt="personal" className='card-img-middle'  />
        <div className="card-body text-dark" ></div>
  <h4 className="card-title title1">{props.cardtitle}</h4>
       <p className="card-text text-secondary">{props.description}</p>
    {/* <a href='#' className='btn btn-outline-success'>Arrow click here</a> */}
   <div><button class="button buttonCircle ">{props.buttonText}</button></div>
    <p className="card-text text-secondary savetext">{props.savetext}</p>
    </div>
  </div>
    )
}
