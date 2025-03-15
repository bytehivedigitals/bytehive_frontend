import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./marquee.css";

const ScrollingBanner = () => {
  return (
    <div className="scrolling-banner-wrapper">
      <div className="scrolling-banner">
        <div className="scrolling-content">
          <span>Byte Hive - Innovating the Future &nbsp; ● &nbsp;</span>
          <span>Byte Hive - Innovating the Future &nbsp; ● &nbsp;</span>
          <span>Byte Hive - Innovating the Future &nbsp; ● &nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
