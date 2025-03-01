import React from "react";
import CurvedNavbar from "../components/Navbar/CurvedNavbar";
import Landing from "../components/Landingpage/Landing";
import Service from "../components/ServicesPage/Service";

const Home = () => {
  return (
    <div>
      <CurvedNavbar />
      <Landing />
      <Service />
    </div>
  );
};

export default Home;
