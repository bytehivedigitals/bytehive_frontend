import React, { useState } from "react";
import "./blog.css";
import image1 from "../../assets/React-BLOG-IMAGES-01-891x505.jpg";
import image2 from "../../assets/Magento-Community-vs-Enterprise.webp";
import image3 from "../../assets/aivs.jpeg";
import image4 from "../../assets/UI-Design-Trends-for-2025.png";
import image5 from "../../assets/1719829481961.png";
import image6 from "../../assets/1730873841122.jpeg";
import image7 from "../../assets/understanding_web3_2.webp";
import image8 from "../../assets/Ben&Charles_Video_Interview (3).png";

const blogs = [
  {
    title: "React Native vs Native: Which is Better for App Development?",
    date: "March 20, 2025",
    readTime: "10 mins read",
    image: image1,
    link: "https://appinventiv.com/blog/react-native-vs-native-apps/",
  },
  {
    title: "Comparing Solutions: Magento Community vs Enterprise Edition",
    date: "March 19, 2025",
    readTime: "9 mins read",
    image: image2,
    link: "https://www.mgt-commerce.com/blog/magento-community-vs-enterprise/",
  },
  {
    title: "Gen AI VS Agentic AI: What is the Difference?",
    date: "February 10, 2023",
    readTime: "3 mins read",
    image: image3,
    link: "https://eicta.iitk.ac.in/knowledge-hub/artificial-intelligence/agentic-ai-vs-generative-ai/#:~:text=Agentic%20AI%3A%20It%20focuses%20on,text%2C%20graphics%2C%20and%20music.",
  },
  {
    title: "Top UI/UX Trends in 2025: What You Need to Know",
    date: "March 15, 2025",
    readTime: "7 mins read",
    image: image4,
    link: "https://medium.com/codeart-mk/ux-ui-trends-2025-818ea752c9f7",
  },
  {
    title: "How AI is Revolutionizing Software Development",
    date: "March 10, 2025",
    readTime: "8 mins read",
    image: image5,
    link: "https://www.ibm.com/think/topics/ai-in-software-development",
  },
  {
    title: "The Future of E-commerce: Trends to Watch in 2025",
    date: "March 5, 2025",
    readTime: "6 mins read",
    image: image6,
    link: "https://www.coursera.org/articles/ecommerce-trends",
  },
  {
    title: "Web 3.0: Understanding the Next Internet Evolution",
    date: "March 1, 2025",
    readTime: "7 mins read",
    image: image7,
    link: "https://www.ramotion.com/blog/what-is-web-3-0/#:~:text=Web%203.0%20represents%20a%20paradigm,with%20online%20applications%20and%20services.",
  },
  {
    title: "Cybersecurity in 2025: Threats and Best Practices",
    date: "February 25, 2025",
    readTime: "5 mins read",
    image: image8,
    link: "https://onlinedegrees.sandiego.edu/top-cyber-security-threats/",
  },
];

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setVisibleBlogs(expanded ? 4 : blogs.length);
    setExpanded(!expanded);
  };

  return (
    <section className="blog-section">
      <h2 className="section-title">Latest Insights</h2>
      <div className="blog-grid">
        {blogs.slice(0, visibleBlogs).map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt="Blog" className="blog-img" />
            <div className="blog-content">
              <small className="blog-meta">
                {blog.readTime} • {blog.date}
              </small>
              <h3 className="blog-title">{blog.title}</h3>
              <a
                href={blog.link}
                className="read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="explore-btn-container">
        <button className="explore-btn" onClick={toggleExpand}>
          {expanded ? "Show Less ↑" : "Explore all insights →"}
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
