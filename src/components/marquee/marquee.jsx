import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./marquee.css";

const ScrollingBanner = () => {
  return (
    <div className="scrolling-banner-wrapper">
      <div className="scrolling-banner">
        <div className="scrolling-content">
          {/* Duplicating content for seamless effect */}
          <span>Byte Hive - Let's Make It Great! &nbsp; ● &nbsp;</span>
          <span>Byte Hive - Let's Make It Great! &nbsp; ● &nbsp;</span>
          <span>Byte Hive - Let's Make It Great!&nbsp; ● &nbsp;</span>
          <span>Byte Hive - Let's Make It Great!&nbsp; ● &nbsp;</span>
          <span>Byte Hive - Let's Make It Great!&nbsp; ● &nbsp;</span>
          <span>Byte Hive - Let's Make It Great! &nbsp; ● &nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
