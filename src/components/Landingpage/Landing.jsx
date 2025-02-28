import React from 'react';
import '../Landingpage/Landing.css';
import gif from '../../assets/byt.gif';

function Landing() {
  return (
    <div className="gif-container">
      <img src={gif} alt="Responsive GIF" />

      <p className="responsive-paragraph">
      At BYTEHIVE, we believe in driving the future through innovation and technology. Our mission is to provide cutting-edge solutions that not only meet the challenges of today but anticipate the needs of tomorrow. By combining expertise with creativity, we empower businesses to thrive in an ever-evolving digital landscape. Every project we undertake is fueled by a passion for excellence, ensuring that we deliver tailored, reliable, and impactful results that help our clients stay ahead in the competitive world of technology.
      </p>
      
      <div className="right-aligned-header">
        <h1>LET'S</h1>
        <h2>MAKE IT</h2>
        <h3>GREAT !</h3>
      </div>
      
     
    </div>
  );
}

export default Landing;