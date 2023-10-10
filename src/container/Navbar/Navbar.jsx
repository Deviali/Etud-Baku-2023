import React, {useState} from 'react';
import images from '../../constants/images';
import {GiHamburgerMenu} from 'react-icons/gi';
import {LiaCocktailSolid} from 'react-icons/lia';
import './Navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <nav className="navbar-container d-flex">
      <div className="navbar-logo">
        <img src={images.logoWh} alt="Logo" />
      </div>
      <ul className="navbar-links d-flex">
        <li className="p_avenir"><a href="/">Home</a></li>
        <li className="p_avenir"><a href="/#about">About</a></li>
        <li className="p_avenir"><a href="/#gallery">Gallery</a></li>
        <li className="p_avenir"><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} className="ham-sizes" onClick={()=> setToggleMenu(true)} />
        
        {toggleMenu && ( <div className="navbar-smallscreen-overlay d-flex slide-bottom">
          <LiaCocktailSolid color='goldenrod' fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)}/>
          <ul className="navbar-smallscreen-links">
        <li className="p_avenir"><a href="/">Home</a></li>
        <li className="p_avenir"><a href="/#about">About</a></li>
        <li className="p_avenir"><a href="/#gallery">Gallery</a></li>
        <li className="p_avenir"><a href="#contact">Contact</a></li>
      </ul>
        </div>

        )}
      </div>
      </nav>
  )
}


export default Navbar;