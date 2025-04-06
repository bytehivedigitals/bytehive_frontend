import React, { useRef, useEffect, useState } from "react";
import "./Approch.css";
import img from "../../assets/approach-card-img1.jpg";
import img1 from "../../assets/approach-card-img2.jpg";
import img2 from "../../assets/approach-card-img3.jpg";
import img3 from "../../assets/approach-card-img4.jpg";
import img4 from "../../assets/approach-card-img5.jpg";
import img5 from "../../assets/approach-card-img6.jpg";
import img6 from "../../assets/approach-card-img7.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: "Discover",
    description:
      "Understand client goals, challenges, and market trends through initial consultations and research.",
    image: img,
  },
  {
    id: 2,
    title: "Plan",
    description:
      "Define objectives, gather requirements, and create a strategic roadmap with a detailed proposal.",
    image: img1,
  },
  {
    id: 3,
    title: "Design",
    description:
      "Develop wireframes, prototypes, and branding elements, refining based on client feedback.",
    image: img2,
  },
  {
    id: 4,
    title: "Develop",
    description:
      "Implement technical solutions through iterative development and regular client check-ins.",
    image: img3,
  },
  {
    id: 5,
    title: "Test & Optimize",
    description:
      "Conduct thorough testing, fix bugs, and optimize for performance and security.",
    image: img4,
  },
  {
    id: 6,
    title: "Launch & Deploy",
    description:
      "Deploy the final product, provide training, and assist with marketing and SEO strategies.",
    image: img5,
  },
  {
    id: 7,
    title: "Support & Grow",
    description:
      "Offer ongoing maintenance, scaling, and partnership for long-term client success.",
    image: img6,
  },
];

const Approch = () => {
  const cardsRef = useRef([]);
  const cardStackRef = useRef(null);
  const [stackedIndex, setStackedIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 580);
  const isScrollingRef = useRef(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 580;
      setIsMobile(newIsMobile);
      
      if (newIsMobile) {
        cardsRef.current.forEach((card, idx) => {
          if (!card) return;
          card.style.transform = '';
          card.style.top = '';
          card.style.transition = '';
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop scroll effect
  useEffect(() => {
    if (isMobile) return;

    const cardStack = cardStackRef.current;
    const handleScroll = (event) => {
      event.preventDefault();

      if (isScrollingRef.current) return;

      const delta = Math.sign(event.deltaY);

      if (delta > 0 && stackedIndex < cardsRef.current.length - 1) {
        handleNext();
      } else if (delta < 0 && stackedIndex > 0) {
        handlePrevious();
      }
    };

    cardStack.addEventListener("wheel", handleScroll, { passive: false });
    return () => cardStack.removeEventListener("wheel", handleScroll);
  }, [stackedIndex, isMobile]);

  // Update card positions
  useEffect(() => {
    if (isMobile) {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.style.transform = '';
        card.style.top = '';
        card.style.transition = '';
      });
      return;
    }

    cardsRef.current.forEach((card, idx) => {
      if (!card) return;
      
      card.style.transition = "transform 0.5s ease, top 0.5s ease";

      if (idx <= stackedIndex) {
        // Fully stacked cards
        card.style.transform = `translateY(${-idx * 103}%)`;
        card.style.top = "0";
      } else if (idx === stackedIndex + 1) {
        // Next card
        const topValue = stackedIndex >= 2 ? 30 : 35;
        card.style.transform = "translateY(0)";
        card.style.top = `${-stackedIndex * (100 - topValue)}%`;
      } else {
        // Future cards (hidden)
        card.style.transform = "translateY(0)";
        card.style.top = "0";
      }
    });
  }, [stackedIndex, isMobile]);

  const handleNext = () => {
    if (isMobile) {
      setCurrentCardIndex(prev => 
        prev < cardData.length - 1 ? prev + 1 : prev
      );
    } else {
      if (stackedIndex < cardsRef.current.length - 1) {
        isScrollingRef.current = true;
        setStackedIndex(prev => prev + 1);
        setTimeout(() => { isScrollingRef.current = false; }, 500);
      }
    }
  };

  const handlePrevious = () => {
    if (isMobile) {
      setCurrentCardIndex(prev => 
        prev > 0 ? prev - 1 : prev
      );
    } else {
      if (stackedIndex > 0) {
        isScrollingRef.current = true;
        setStackedIndex(prev => prev - 1);
        setTimeout(() => { isScrollingRef.current = false; }, 500);
      }
    }
  };

  return (

    <div className="main-approch">
      <div className="left-section">
        <h5>Think big with us.</h5>
        {isMobile ? (
            <div className="mobile-carousel-container">
              <div className="mobile-carousel">
                <button 
                  className="nav-button left" 
                  onClick={handlePrevious}
                  disabled={currentCardIndex === 0}
                  aria-label="Previous card"
                >
                  <FaArrowLeft size={35} />
                </button>
                
                <div className="card-stack-mobile">
                  {cardData.map((card, index) => (
                    <div
                      key={card.id}
                      className={`mobile-card ${index === currentCardIndex ? 'active' : ''}`}
                      style={{
                        transform: `translateX(${(index - currentCardIndex) * 100}%)`,
                        opacity: index === currentCardIndex ? 1 : 0
                      }}
                    >
                      <div className="card-number">{index + 1}</div>
                      <div className="card-image">
                        <img src={card.image} alt={card.title} />
                      </div>
                      <div className="card-content">
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  className="nav-button right" 
                  onClick={handleNext}
                  disabled={currentCardIndex === cardData.length - 1}
                  aria-label="Next card"
                >
                  <FaArrowRight size={35} />
                </button>
              </div>
            </div>
          ) : (
            <div className="card-stack" ref={cardStackRef}>
              {cardData.map((card, index) => (
                <div
                  key={card.id}
                  className={`card ${index <= stackedIndex ? 'stacked' : ''}`}
                  ref={(el) => (cardsRef.current[index] = el)}
                  style={{
                    zIndex: index,
                    transform: index <= stackedIndex 
                      ? `translateY(${-(index * 80)}%)` 
                      : 'translateY(0)'
                  }}
                >
                  <div className="card-number">{index + 1}</div>
                  <div className="card-image">
                    <img src={card.image} alt={`Card ${card.title}`} />
                  </div>
                  <div className="card-content">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>

      <div className="right-section">
        <div className="approch-txt">
            <h1>OUR EXCELLENT</h1>
            <h2>APPROACH</h2>
        </div>
        <p>
          Short intro on who we are and what we do. Key values and mission
          statement. Showcase past projects, case studies.
        </p>
      </div>
    </div>
  );
};

export default Approch;
