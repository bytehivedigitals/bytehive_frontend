import React from "react";
import CurvedNavbar from "../components/Navbar/CurvedNavbar";
import Landing from "../components/Landingpage/Landing";
import Service from "../components/ServicesPage/Service";
import Story from "../components/OurStory/Story";
import Approch from "../components/Approch/Approch";
import Footer from "../components/footer/footer";
import ScrollingBanner from "../components/marquee/marquee";
const Home = () => {
  return (
    <div style={{ background: '#f5f5f5'}}>
      <CurvedNavbar />
      <Landing />
      <Story />
      <Service />
      <Approch />
      <Footer />
      <ScrollingBanner />
    </div>
  );
};

export default Home;
