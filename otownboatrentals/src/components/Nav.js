import React from "react";
import { Link } from 'react-router-dom';
import palmtree from "../images/PalmTree.png"
import logo from "../images/OTownLogo.png"
import '../css files/Nav.css'

const Nav = () => {
  return (
    <div>
      <div className="logoContainer">
        <img className="palmTree" src={palmtree} alt="a cartoon palmtree used for design" />
        {/* <p> TEST TEST TEST</p> */}

        <img className="logo" src={logo} alt="The logo for O Town Boat Rentals" />

      </div>

      <nav className="directory">

        <Link to={'/'} className='navBtn'>Home</Link>
        <Link to={'/'} className='navBtn'>Gallery</Link>
        <Link to={'/'} className='navBtn'>Pricing</Link>
        <Link to={'/'} className='navBtn'>Contact</Link>
        <Link to={'/'} className='navBtn'>Book Now</Link>


      </nav>



    </div>
  );


};

export default Nav;