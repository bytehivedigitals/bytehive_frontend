import React from "react";
import CurvedNavbar from "../components/Navbar/CurvedNavbar";
import Landing from "../components/Landingpage/Landing";
import Service from "../components/ServicesPage/Service";
import Story from "../components/OurStory/Story";
import Approch from "../components/Approch/Approch";
import Footer from "../components/footer/footer";
import ScrollingBanner from "../components/marquee/marquee";
import BlogSection from "../components/blogs/blog";
import FormWithBackground from "../components/Form/Form2";

const Home = () => {
  return (
    <div style={{ background: "#dbdde9", width: "100vw", }}>
      <CurvedNavbar />

      {/* Landing Section */}
      <div id="landing">
        <Landing />
      </div>

      {/* Story Section */}
      <div id="about">
        <Story />
      </div>

      {/* Service Section */}
      <div id="what-we-do">
        <Service />
      </div>

      {/* Approach Section */}
      <div id="method">
        <Approch />
      </div>

      {/* Blog Section */}
      <div id="learn">
        <BlogSection />
      </div>

      {/* Contact Form Section */}
      <div id="contact">
        <FormWithBackground />
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Scrolling Banner */}
      <ScrollingBanner />
    </div>
  );
};

export default Home;
