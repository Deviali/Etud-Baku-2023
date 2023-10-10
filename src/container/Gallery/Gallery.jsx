import React from "react";
import images from "../../constants/images";
import "./Gallery.css";

const Gallery = () => (
  <div className="gallery-container" id="gallery">
    <h1 className="p_syne">Come Down & Grab a Drink</h1>
    <div className="gallery-gal d-flex">
      <div className="gallery-big-pic">
        <img src={images.barfiller01} alt="pic of a bar" />
      </div>
      <div className="gallery-grid d-flex">
        <div className="column">
          <img src={images.barfiller02} alt="pic of a bar" />
          <img className="column-pt"  src={images.barfiller03} alt="pic of a bar" />
        </div>
        <div className="column">
          <img src={images.barfiller04} alt="pic of a bar" />
          <img className="column-pt" src={images.barfiller05} alt="pic of a bar" />
        </div>
        {/* <div className="column">
          <img src={images.barfiller06} alt="pic of a bar" />
          <img src={images.barfiller07} alt="pic of a bar" />
        </div> */}
      </div>
    </div>
    <form action="../../Artists" method="get" className="gallery-button">
    <button type="submit" className="gallery-btn p_avenir">Know More About Our Artists</button>
    </form>
  </div>
);

export default Gallery;
