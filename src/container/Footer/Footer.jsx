import React from "react";
import images from "../../constants/images";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import {Maps} from "../../container";

const Footer = () => (
  <div className="mb-10">
    <Maps />
    <div className="footer-container d-flex" id="contact">
      <div className="footer-column small-hide">
        <img src={images.logoWh} alt="" />
        <ul className="footer-list">
          <li className="p_avenir">
            <a href="#home">Home</a>
          </li>
          <li className="p_avenir">
            <a href="#about">About</a>
          </li>
          <li className="p_avenir">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="p_avenir">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 className="p_syne">Contact</h2>
        <p className="p_avenir footer-icon">
          {" "}
          <BsFillTelephoneFill /> + (994) 50 766 66 90
        </p>
        <p className="p_avenir footer-icon">
          {" "}
          <IoMailSharp /> mail@etudbaku.com{" "}
        </p>
        <br />
        <h2 className="p_syne">Follow Us</h2>
        <br />
        <div className="footer-social">
          <a href="https://www.facebook.com/etudbaku/" className=" footer-icon">
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/etudbaku/"
            className="footer-hrefs footer-icon"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h2 className="p_syne">Opening Hours</h2>
        <p className="p_avenir ">Mon-Th: 5pm-1am</p>
        <p className="p_avenir">Fri-Sat: 6pm-2am</p>
        <p className="p_avenir">Sunday: 5pm-1am</p>
        <br />
        <p className="p_avenir footer-icon">
          {" "}
          <ImLocation className="footer-location-icon" /> 16 Islam Safarli str.,
          <br /> Baku, Azerbaijan
        </p>
      </div>
    </div>
  </div>
);
export default Footer;
