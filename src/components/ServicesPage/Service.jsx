import React,{useState, useRef} from 'react'
import './Service.css'
import Anim from '../../assets/byt.gif'


function Service() {
    
  return (
    <div className='servicePage'>
        <div className='left-side'>
            <div className='left-text'>
            <h1>EXPLORE OUR</h1>
            <h2>SERVICES</h2>
            </div>
            <p>Welcome to BYTEHIVE, where cutting-edge technology meets innovative solutions. We specialize in a wide range of IT services, including custom software development, cloud computing, cybersecurity, and IT consulting. Our team of experts is dedicated to delivering reliable, scalable, and secure solutions tailored to meet the unique needs of your business. Whether you're looking to streamline your operations, protect your data, or build the next big tech solution, we’re here to help you succeed in an ever-evolving digital landscape. Let’s build the future together!</p>
            <img src={Anim} alt="" className='service-img' />
        </div>

    </div>
  )
}

export default Service