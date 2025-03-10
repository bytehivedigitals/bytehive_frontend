import React from "react";
import CurvedNavbar from "../components/Navbar/CurvedNavbar";
import Landing from "../components/Landingpage/Landing";
import Service from "../components/ServicesPage/Service";
import Story from "../components/OurStory/Story";
import Approch from "../components/Approch/Approch";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <div>
      <CurvedNavbar />
      <Landing />
      <Story />
      <Service />

      <Approch />
      <Footer />
    </div>
  );
};

export default Home;
