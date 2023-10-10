import React from 'react';
import Navbar from './../../container/Navbar/Navbar';
import Footer from './../../container/Footer/Footer';
import './Artists.css';
import images from '../../constants/images';

const Artists = () => {
  return (
    <div className="artist-main">
            <Navbar />
            <div className="artist-container">
                <div className="artist-box d-flex">
                    <div className="artist-img">
                        <img src={images.fira} alt="" />
                    </div>
                    <div className="artist-info">
                        <h1 className="p_syne info-h">Firudin Hamidov</h1>
                        <br />
                        <p className="p_avenir info-p">ajufdciuoa h jafdjuq wah ah dahdw uag uagw odaoiu wghuqa gau giuag diuawg iudgau wgia gdua wuig aiuwg duagwdu gauwd gua  </p>
                    </div>
                </div>
                <div className="artist-box d-flex">
                    <div className="artist-info">
                        <h1 className="p_syne info-h">Nicat Aslanov</h1>
                        <br />
                        <p className="p_avenir info-p">ajufdciuoa h jafdjuq wah ah dahdw uag uagw odaoiu wghuqa gau giuag diuawg iudgau wgia gdua wuig aiuwg duagwdu gauwd gua  </p>
                    </div>
                    <div className="artist-img">
                        <img src={images.naslanov} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        
        </div>
  )
}

export default Artists