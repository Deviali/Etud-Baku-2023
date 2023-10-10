import React from "react";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-container d-flex" id="about">
    <div className="about-line-smallscreen"></div>
    <div className="about-main">
      <h1 className="p_avenir">ETUD BAKU</h1>
      <p className="p_syne">Jazz Bar</p>
    </div>
    <div className="about-second">
      <p className="p_syne">
        We are a little, cozy Live Music Bar, Jazz Club in downtown Baku. We
        serve fresh and tasty food (vegetarian as well), local and brand beers,
        wines, and tons of cocktails. We always have live jazz on Tuesdays or
        Wednesdays, and depending on the week - on other days as well. And of
        course you will have a wonderful weekend with the best bands or DJs of
        the city. Check out our Instagram Page for our events.
      </p>
    </div>
  </div>
);

export default AboutUs;
