import React from 'react'
import './Buttons.css'
const Buttons = props=> {
  return (
    <div>
       <a href='#' className='btn button1 rounded-corners'>{props.ButtonText}</a>
    </div>
  )
}

export default Buttons