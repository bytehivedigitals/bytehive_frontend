import React from "react";
import CurvedNavbar from "../components/Navbar/CurvedNavbar";
import Landing from "../components/Landingpage/Landing";
import Service from "../components/ServicesPage/Service";
import Story from "../components/OurStory/Story";
import Approch from "../components/Approch/Approch";
import Footer from "../components/footer/footer";
import ScrollingBanner from "../components/marquee/marquee";
import BlogSection from "../components/blogs/blog";
import FormWithBackground from "../components/Form/Form";
import { Layout } from "lucide-react";
const Home = () => {
  return (
    <div style={{ background: "#f5f5f5", width: "100vw" }}>
      <CurvedNavbar />
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <Story />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="works">
        <Approch />
      </div>
      <BlogSection />
      <FormWithBackground />
      <Footer />
      <ScrollingBanner />
    </div>
  );
};

export default Home;
