import React from 'react';
import './WhatsOn.css';
import images from "../../constants/images";


const WhatsOn = () => (
    <div className="whatson-container">
      <div className="whatson-line"></div>
      <h1 className="p_syne">What's On</h1>
      <div className="d-flex whatson-box">
        <img src={images.special01} alt="special item of month" />
        <div className="whatson-text">
          <p className="p_syne">Happy Hour</p>
          <p className="p_syne">Special Cocktail of month</p>
          <p className="p_avenir">Come and get it <br/> testing line breaks</p>
        </div>
        <div></div>
      </div>
      <div className="d-flex whatson-box">
        <div></div>
      <div className="whatson-text">
          <p className="p_syne">This Week at Etud</p>
          <p className="p_syne">Live Music </p>
          <p className="p_avenir">Tuesdays & Wednesdays Jazz <br/> Friday&Saturdays live bands</p>
        </div>
        <img src={images.special02} alt="last post of instagram" />
      </div>
    </div>
  );


export default WhatsOn;