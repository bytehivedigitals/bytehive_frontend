import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./marquee.css";

const ScrollingBanner = () => {
  const content = (
    <>
      <span>Byte Hive - Let's Make It Great! &nbsp; ● &nbsp;</span>
      <span>Byte Hive - Let's Make It Great! &nbsp; ● &nbsp;</span>
      <span>Byte Hive - Let's Make It Great! &nbsp; ● &nbsp;</span>
      <span>Byte Hive - Let's Make It Great! &nbsp; ● &nbsp;</span>
    </>
  );

  return (
    <div className="scrolling-banner-wrapper">
      <div className="scrolling-banner">
        <div className="scrolling-content">
          {content}
          {content} {/* Duplicate for seamless loop */}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
