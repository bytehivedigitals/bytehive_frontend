import React, { useRef, useEffect, useState } from 'react';
import './Approch.css'

const Approch = () => {
  const cards = useRef([]);
  const cardStackRef = useRef(null);
  const [stackedIndex, setStackedIndex] = useState(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const cardStack = cardStackRef.current;

    const handleScroll = (event) => {
      event.preventDefault();

      if (isScrollingRef.current) {
        return;
      }
      
      const delta = Math.sign(event.deltaY); // 1 for scrolling down, -1 for scrolling up
      
      if (delta > 0 && stackedIndex < cards.current.length - 1) {
        // Scroll down: stack the next card
        isScrollingRef.current = true;
        setStackedIndex((prev) => prev + 1);

        const currentCard = cards.current[stackedIndex + 1];
        const nextCard = cards.current[stackedIndex + 2];

        if (currentCard) {
          currentCard.style.top = '0';
        }
          
        if (nextCard) {
          nextCard.style.top = stackedIndex + 2 == 3 ? '-130%' : '-60%';
        }
      } else if (delta < 0 && stackedIndex > 0) {
        // Scroll up: unstack the previous card
        isScrollingRef.current = true;
        setStackedIndex((prev) => prev - 1);

        const currentCard = cards.current[stackedIndex];
        const previousCard = cards.current[stackedIndex - 1];

        if (currentCard) {
          currentCard.style.top = stackedIndex == 1 ? '70%' : '0';
        }
      
        if (previousCard) {
          previousCard.style.top = stackedIndex - 1 === 0 ? '0' : '70%';
        }
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    };
    
    cardStack.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      cardStack.removeEventListener('wheel', handleScroll);
    };
  }, [stackedIndex]);
  
  
  useEffect(() => {
    cards.current.forEach((card, index) => {
      if (index <= stackedIndex) {
        // Stack the card
        card.style.transform = `translateY(${-(index * 100)}%)`;
      } else {
        // Unstack the card
        card.style.transform = 'translateY(0)';
      }
    });
  }, [stackedIndex]);

  return (
    <div className='main-approch'>
      <div className='left-section'>
        <div className='approch-txt'>
          <h1>OUR EXCELLENT</h1>
          <h2>APPROACH</h2>
        </div>
        <p>Short intro on who we are and what we do. Key values and mission statement. Showcase past projects, case studies.</p>
      </div>

      <div className='right-section'>
        <div className="card-stack" ref={cardStackRef}>
          <div className="card" ref={el => cards.current[0] = el}>
            <h2>01</h2>
            <p>Auto-join</p>
            <p>Consultation & needs analysis</p>
          </div>
          <div className="card" ref={el => cards.current[1] = el}>
            <h2>02</h2>
            <p>Overseas Transfer</p>
            <p>Choose Country: USA</p>
          </div>
          <div className="card" ref={el => cards.current[2] = el}>
            <h2>03</h2>
            <p>Design & development</p>
          </div>
          <div className="card" ref={el => cards.current[3] = el}>
            <h2>04</h2>
            <p>Deployment & ongoing support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approch;