import React from "react";
import "./blog.css";
import image1 from "../../assets/React-BLOG-IMAGES-01-891x505.jpg";
import image2 from "../../assets/Magento-Community-vs-Enterprise.webp";
import image3 from "../../assets/aivs.jpeg";
import image4 from "../../assets/UI-Design-Trends-for-2025.png";
const blogs = [
  {
    title: "React Native vs Native: Which is Better for App Development?",
    date: "March 20, 2025",
    readTime: "10 mins read",
    image: image1,
  },
  {
    title: "Comparing Solutions: Magento Community vs Enterprise Edition",
    date: "March 19, 2025",
    readTime: "9 mins read",
    image: image2,
  },
  {
    title: "Gen AI VS Agentic AI: what is the difference?",
    date: "February 10, 2023",
    readTime: "3 mins read",
    image: image3,
  },
  {
    title: "Top UI/UX Trends in 2025: What You Need to Know",
    date: "March 15, 2025",
    readTime: "7 mins read",
    image: image4,
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Latest Insights</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt="Blog" className="blog-img" />
            <div className="blog-content">
              <small className="blog-meta">
                {blog.readTime} • {blog.date}
              </small>
              <h3 className="blog-title">{blog.title}</h3>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
      <div className="explore-btn-container">
        <button className="explore-btn">Explore all insights →</button>
      </div>
    </section>
  );
};

export default BlogSection;
