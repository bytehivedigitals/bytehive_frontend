import React from "react";
import CurvedNavbar from "../components/Navbar/CurvedNavbar";
import Landing from "../components/Landingpage/Landing";
import Service from "../components/ServicesPage/Service";
import Story from "../components/OurStory/Story";
import Approch from "../components/Approch/Approch";

const Home = () => {
  return (
    <div>
      <CurvedNavbar />
      <Landing />
      <Service />
      <Story />
      <Approch />
    </div>
  );
};

export default Home;
