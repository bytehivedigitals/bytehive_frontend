import React, { useState, useEffect, useRef } from 'react';
import './Story.css';
import vedioStory from '../../assets/OURSTORY.mp4';

function Story() {
  const [videoScale, setVideoScale] = useState(0.3);
  const [contentPosition, setContentPosition] = useState(0);
  const [videoOffset, setVideoOffset] = useState(0);
  const storyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportWidth = window.innerWidth;
  
      // Skip animations for mobile
      if (viewportWidth <= 768) {
        setVideoScale(1);
        setContentPosition(0);
        setVideoOffset(0);
        return;
      }
  
      const position = window.pageYOffset;
      const storyElement = storyRef.current;
      const storyTop = storyElement.offsetTop;
      const viewportHeight = window.innerHeight;
  
      const relativePosition = position - storyTop;
  
      // Increased scroll distance for slower animation (multipliers adjusted)
      const scaleUpEnd = viewportHeight * 1; // Increased from 0.5 to 1.5
      const holdPosition = viewportHeight * 1; // Increased from 0.5 to 1.5
      const scaleDownEnd = viewportHeight * 1.5; // Increased from 0.6 to 2.0
      const moveToFinalPosition = viewportHeight * 3.0; // Increased from 1.5 to 3.0
  
      if (relativePosition < 0) {
        setVideoScale(0.3);
        setContentPosition(0);
        setVideoOffset(0);
      } else if (relativePosition <= scaleUpEnd) {
        const progress = relativePosition / scaleUpEnd;
        setVideoScale(0.3 + 0.55 * progress); // Slower scaling due to longer distance
        setContentPosition(-100 * progress);
      } else if (relativePosition <= holdPosition) {
        setVideoScale(0.85); // Slightly adjusted for smoother transition
        setContentPosition(100);
      } else if (relativePosition <= scaleDownEnd) {
        const progress = (relativePosition - holdPosition) / (scaleDownEnd - holdPosition);
        setVideoScale(0.85 - 0.5 * progress); // Slower scaling down
      } else if (relativePosition <= moveToFinalPosition) {
        const progress = (relativePosition - scaleDownEnd) / (moveToFinalPosition - scaleDownEnd);
        setVideoOffset(progress * 250);
        setVideoScale(0.25);
      } else {
        setVideoScale(0.25);
        setVideoOffset(200);
      }
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  
  return (
    <div className='story-main' ref={storyRef}>
      <div className='story-h1'> 
        <h1>EXPLORE OUR STORY</h1>
      </div>
      
      <div className='video-container' style={{ 
        transform: `scale(${videoScale}) translateY(${videoOffset}px)`,
        width: '100%',
        transformOrigin: 'center top'
      }}>
        <video src={vedioStory} autoPlay loop muted playsInline></video>
      </div>
      
      <div className='dotHeadings' style={{ 
        transform: `translateY(${contentPosition}px)`,
        opacity: contentPosition < -90 ? 0 : 1
      }}>
        <h2>
          <span>Brand Strategy</span>
          <span className="dot">•</span>
          <span>Brand Culture</span>
          <span className="dot">•</span>
          <span>Brand Innovation</span>
          <span className="dot">•</span>
          <span>Brand Design</span>
          <span className="dot">•</span>
          <span>Brand Transformation</span>
        </h2>
      </div>

      <div className='text-container'>
        <span><h2 className='h2One'>LETS</h2>
        <h2 className='h2Two'>BRAND</h2></span>
        <h2 className='h2Three'>YOUR FUTURE</h2>
      </div>
    </div>
  );
}

export default Story;