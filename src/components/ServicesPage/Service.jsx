import React,{useState, useRef} from 'react'
import './Service.css'
import Anim from '../../assets/service-anim.gif'

const services = [
  {
    title: "BRAND IDENTITY CREATION",
    description: "We help you create a unique brand identity that resonates with your audience and stands out in the market. From logos to brand guidelines, we ensure your brand tells a compelling story.",
  },
  {
    title: "WEB & MOBILE DESIGN",
    description: "Our team designs responsive and user-friendly web and mobile interfaces to enhance user experience. We focus on creating designs that are both visually appealing and highly functional.",
  },
  {
    title: "UI/UX DESIGN",
    description: "We focus on creating intuitive and engaging user interfaces and experiences for your digital products. Our designs prioritize usability, accessibility, and user satisfaction.",
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description: "We develop custom software solutions tailored to your business needs, ensuring scalability and security. Our solutions are designed to grow with your business and adapt to changing requirements.",
  },
  {
    title: "CLOUD COMPUTING",
    description: "Our cloud solutions help you optimize your operations and reduce costs with scalable and secure cloud services. We provide end-to-end cloud migration, management, and optimization.",
  },
  {
    title: "CYBERSECURITY",
    description: "We provide comprehensive cybersecurity services to protect your data and systems from threats. Our proactive approach ensures your business stays secure in an ever-evolving digital landscape.",
  },
  {
    title: "IT CONSULTING",
    description: "Our IT consulting services help you navigate the digital landscape and implement the best technology solutions. We offer strategic guidance to align technology with your business goals.",
  }
];


function Service() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const handleCardClick = (index) => {
    const isExpanding = activeIndex !== index;
    setActiveIndex(isExpanding ? index : null);

    // setTimeout(() => {
    //   const cardElement = cardRefs.current[index];
    //   if (cardElement && cardsContainerRef.current) {
    //     if (isExpanding) {
    //         // Scroll to center the expanded card
    //         const containerHeight = cardsContainerRef.current.clientHeight;
    //         const cardHeight = cardElement.clientHeight;
    //         const scrollTop = cardElement.offsetTop - (containerHeight - cardHeight) / 2;
    //         cardsContainerRef.current.scrollTo({
    //           top: scrollTop,
    //           behavior: 'smooth',
    //         });
    //       } else {
    //         // Scroll back to the original position (top of the card)
    //         cardsContainerRef.current.scrollTo({
    //           top: cardElement.offsetTop,
    //           behavior: 'smooth',
    //         });
    //       }
    //     }
    //   }, 10);
  };

  return (
    <div className={`servicePage ${activeIndex !== null ? 'expanded' : ''}`}>
        <div className='left-side'>
          <div className='left-text'>
            <h1>EXPLORE OUR</h1>
            <h2>SERVICES</h2>
          </div>
          <p>Welcome to BYTEHIVE, where technology meets innovation. We deliver secure, scalable, and tailored IT solutions to help your business thrive in the digital era. Let’s build the future together!</p>
          <img src={Anim} alt="" className='service-img' />
        </div>
        
        <div className={`right-side ${activeIndex !== null ? 'expanded' : ''}`}>
          <div className='cards-container' ref={cardsContainerRef}>
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`service-block ${index === activeIndex ? 'expanded' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <h3>
                  {service.title.split(" ").slice(0, 2).join(" ")}
                  {service.title.split(" ").length > 2 && <br />}
                  {service.title.split(" ").slice(2).join(" ")}
                </h3>
                {index !== activeIndex && <p className='service-caption'>Short Caption On Services</p>}
                {index === activeIndex && <p className='service-description'>{service.description}</p>}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Service