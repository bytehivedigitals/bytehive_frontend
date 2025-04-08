import React, { useEffect, useRef } from "react";
import "./Story.css";
import videoSource from "../../assets/oto final motion.mp4";

function Story() {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const headingsRef = useRef(null);
  const storyMainRef = useRef(null);
  const smallVidRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) return;

      const scrollY = window.scrollY;
      const storyMain = storyMainRef.current;
      const video = videoRef.current;
      const container = videoContainerRef.current;
      const headings = headingsRef.current;
      const smallVid = smallVidRef.current;
      const text = textRef.current;

      const sectionTop = storyMain.offsetTop;
      const sectionHeight = storyMain.offsetHeight;
      const progress = (scrollY - sectionTop) / sectionHeight;

      if (progress < 0) return;

      if (progress < 0.2) {
        const scale = 0.8 + progress * 1.5;
        video.style.transform = `scale(${scale})`;
        container.style.position = "relative";
        headings.style.opacity = 1 - progress * 5;
        text.style.transform = `translateY(100px)`;
      } else if (progress >= 0.2 && progress < 0.8) {
        video.style.transform = `scale(1.4)`;
        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100%";
        container.style.height = "100vh";
        container.style.transform = "none";

        headings.style.opacity = 0;
        text.style.transform = `translateY(100px)`;
      } else if (progress >= 0.8 && progress <= 1.0) {
        const outProgress = (progress - 0.8) / 0.2;
        const scale = 1.4 - outProgress * 0.8;
        video.style.transform = `scale(${scale})`;

        const smallVidRect = smallVid.getBoundingClientRect();
        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;
        const endX = smallVidRect.left + smallVidRect.width / 2;
        const endY = smallVidRect.top + smallVidRect.height / 2;

        const currentX = startX + (endX - startX) * outProgress;
        const currentY = startY + (endY - startY) * outProgress;

        container.style.position = "fixed";
        container.style.top = `${currentY}px`;
        container.style.left = `${currentX}px`;
        container.style.transform = "translate(-50%, -50%)";

        // Show text sliding up
        text.style.transform = `translateY(${(1 - outProgress) * 50}px)`;
      } else if (progress > 1.0) {
        container.style.position = "relative";
        container.style.top = "auto";
        container.style.left = "auto";
        container.style.transform = "none";
        video.style.transform = `scale(0.6)`;
        text.style.transform = `translateY(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="story-main" ref={storyMainRef}>
      <div className="story-h3" ref={headingsRef}>
        <h3>EXPLORE OUR STORY</h3>
      </div>

      <div className="story-video" ref={videoContainerRef}>
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>

      <div className="dot-headings">
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

      <div className="story-h1" ref={textRef}>
        <h1>
          LET'S
          <div className="small-vid" ref={smallVidRef}></div>
          <span className="highlight">BRAND</span> YOUR FUTURE
        </h1>
      </div>
    </div>
  );
}

export default Story;
