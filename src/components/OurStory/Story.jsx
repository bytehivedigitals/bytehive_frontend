import React, { useRef, useEffect } from 'react';
import './Story.css';
import viedoSource from '../../assets/oto final motion.mp4';

function Story() {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const headingsRef = useRef(null);
  const storyMainRef = useRef(null);
  const smallVidRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const videoContainer = videoContainerRef.current;
      const video = videoRef.current;
      const headings = headingsRef.current;
      const storyMain = storyMainRef.current;
      const smallVid = smallVidRef.current;
      
      if (videoContainer && video && headings && storyMain && smallVid) {
        const viewportHeight = window.innerHeight;
        const startOffset = 100; // When animation starts
        const scaleEndOffset = viewportHeight * 0.9; // When scaling up ends
        const moveStartOffset = scaleEndOffset; // When movement starts
        const finalPositionOffset = viewportHeight * 1.8; // When movement ends
        
        // Calculate progress for different stages
        const scaleUpProgress = Math.min(1, Math.max(0, (scrollPosition - startOffset) / (scaleEndOffset - startOffset)));
        const moveProgress = Math.min(1, Math.max(0, (scrollPosition - moveStartOffset) / (finalPositionOffset - moveStartOffset)));

              // Set transform-origin to center for smooth scaling from center
      videoContainer.style.transformOrigin = 'center center';
        
        // Stage 1: Video scaling up
        if (scrollPosition < scaleEndOffset) {
          // Scale from 1 to 2.5
          const scale = 1 + scaleUpProgress * 1.5;
          video.style.transform = `scale(${scale})`;
          videoContainer.style.zIndex = '10';
          videoContainer.style.position = 'relative';
          videoContainer.style.top = 'auto';
          videoContainer.style.left = 'auto';
          videoContainer.style.transform = 'none';
          
          // Fade out headings as video scales up
          headings.style.opacity = 1 - scaleUpProgress;
          headings.style.transform = `translateY(${scaleUpProgress * 50}px)`;
        } 
        // Stage 2: Video moving to final position inside small-vid
        else {
          // Headings completely hidden
          headings.style.opacity = 0;
          
          // Get the position of the small-vid element
          const smallVidRect = smallVid.getBoundingClientRect();
          const smallVidCenterX = smallVidRect.left + smallVidRect.width / 2;
          const smallVidCenterY = smallVidRect.top + smallVidRect.height / 2;
          
          // Calculate target scale (much smaller to fit in the small-vid div)
          const targetScale = 0.2; // Adjust this value based on your needs
          
          // Calculate current position and scale with easing
          const easedProgress = easeOutCubic(moveProgress);
          const currentScale = 2.5 - (2.3 * easedProgress); // Scale down from 2.5 to 0.2
          
          // Calculate position (from center of viewport to small-vid position)
          const startX = window.innerWidth / 1.5;
          const startY = window.innerHeight / 1.5;
          const deltaX = smallVidCenterX - startX;
          const deltaY = smallVidCenterY - startY;
          
          videoContainer.style.position = 'fixed';
          videoContainer.style.top = `${startY + deltaY * easedProgress}px`;
          videoContainer.style.left = `${startX + deltaX * easedProgress}px`;
          videoContainer.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
          videoContainer.style.zIndex = '100';
          
          // When animation is complete, transfer video to small-vid container
          if (moveProgress >= 1) {
            // You might want to handle this differently depending on your needs
            // For example, you could clone the video element and place it in small-vid
          }
        }
      }
    };

    // Easing function for smooth animation
    function easeOutCubic(t) {
      return (--t) * t * t + 1;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='story-main' ref={storyMainRef}>
      <div className='story-h3'>
        <h3>EXPLORE OUR STORY</h3>
      </div>

      <div className='story-video' ref={videoContainerRef}>
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src={viedoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='dot-headings' ref={headingsRef}>
        <h2>
          <span>Brand Strategy</span>
          <span className="dot">•</span>
          <span>Brand Culture</span>
          <span className="dot">•</span>
          <span>Brand Innovation</span>
          <span className="dot">•</span>
          <span>Brand Design</span>
          <br />
          <span className="dot">•</span>
          <span>Brand Transformation</span>
        </h2>
      </div>

      <div className='story-h1'>
        <h1>LET'S  
          <div className='small-vid' ref={smallVidRef}>
            {/* The video will be moved here programmatically */}
          </div> 
          <span className="highlight">BRAND</span> YOUR FUTURE</h1>
      </div>
    </div>
  );
}

export default Story;