import React from 'react';
import '../Landingpage/Landing.css';
import gif from '../../assets/byt.gif';

function Landing() {
  return (
    <div className='landingPage'>
        <img src={gif} alt="" className='animated-Logo' />
        <div className='text'>
          <h1>LET'S</h1>
          <h2>MAKE IT</h2>
          <h3>GREAT !</h3>
        </div>
        <p className='paragraph'>"At the intersection of innovation and technology, we craft solutions that not only meet today’s challenges but shape tomorrow’s possibilities. Through collaboration, creativity, and cutting-edge expertise, we’re dedicated to building a digital future that empowers businesses and transforms industries"</p>
    </div>
  );
}

export default Landing;