import React, { useState } from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import { Reorder } from '@mui/icons-material';



function Navbar() {

  const [openLinks, setOpneLinks] = useState(false);

  const toggleNavbar = () =>{
    setOpneLinks(!openLinks);
  }

  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <button onClick={toggleNavbar}>
          <Reorder />
        </button>
        
        
      </div>
    </div>
  )
}

export default Navbar
