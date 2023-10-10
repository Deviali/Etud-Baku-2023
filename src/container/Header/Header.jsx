import React from "react";
import { Navbar } from "../../container";
import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <header className="header-container" id="home">
    <div className="header-bg">
    <Navbar/>
    <div></div>
    <div className="header-center-piece d-flex">
      <div></div>
      <div></div>
      <img src={images.logoWh} className="header-logo" alt="logo" />
      <p className="p_syne">Live Music Venue</p>
      <div></div>
      <div></div>
      <div className="header-center-line"></div>
      <p className="p_syne header-address">
        16 Islam Safarli str., Baku, Azerbaijan
      </p>
    </div>
    </div>
  </header>
);

export default Header;
