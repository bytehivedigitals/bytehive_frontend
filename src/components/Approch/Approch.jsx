import React, { useRef, useEffect, useState } from "react";
import "./Approch.css";
import img from "../../assets/25182775_7056551.jpg";
import img1 from "../../assets/6170572_3014250.jpg";
import img2 from "../../assets/7119320_3411092.jpg";
import img3 from "../../assets/18407473_5995345.jpg";
import img4 from "../../assets/37455684_8459331.jpg";
import img5 from "../../assets/7887388_3793120.jpg";
import img6 from "../../assets/Team management Illustration.jpg";

const Approch = () => {
  const cards = useRef([]);
  const cardStackRef = useRef(null);
  const [stackedIndex, setStackedIndex] = useState(0);
  const isScrollingRef = useRef(false);

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
          currentCard.style.top = "0";
        }

        if (nextCard) {
          const stackedIndexValue =
            stackedIndex >= 3 ? stackedIndex + 1.2 : stackedIndex + 1;
          const topValue = stackedIndexValue == 3 ? 380 : 370;
          nextCard.style.top = `${-(stackedIndexValue * topValue)}px`;
        }
      } else if (delta < 0 && stackedIndex > 0) {
        // Scroll up: unstack the previous card
        isScrollingRef.current = true;
        setStackedIndex((prev) => prev - 1);

        const currentCard = cards.current[stackedIndex];
        const previousCard = cards.current[stackedIndex - 1];
        const nextCard = cards.current[stackedIndex + 1];

        if (currentCard && previousCard) {
          previousCard.style.top = "0";
          currentCard.style.top = "0";
          currentCard.style.transform = previousCard.style.transform;
        }

        if (nextCard) {
          nextCard.style.transform = "translateY(0)";
          nextCard.style.top = "0";
        }
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    };

    cardStack.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      cardStack.removeEventListener("wheel", handleScroll);
    };
  }, [stackedIndex]);

  useEffect(() => {
    cards.current.forEach((card, index) => {
      if (index <= stackedIndex) {
        // Stack the card
        card.style.transform = `translateY(${-(index * 103)}%)`;
      }
    });
  }, [stackedIndex]);

  return (
    <div className="main-approch">
      <div className="left-section">
        <div className="approch-txt">
          <h1>OUR EXCELLENT</h1>
          <h2>APPROACH</h2>
        </div>
        <p>
          Short intro on who we are and what we do. Key values and mission
          statement. Showcase past projects, case studies.
        </p>
      </div>

      <div className="right-section">
        <div className="card-stack" ref={cardStackRef}>
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="card"
              ref={(el) => (cards.current[index] = el)}
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
      </div>
    </div>
  );
};

export default Approch;
