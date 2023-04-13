import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [before, setBefore] = useState(false);

  function toggleFunc() {
    setToggle(toggle => !toggle);
    setBefore(before => !before);
  }

  return (
    <div> 
        <nav>
            <Link to="/" className='logo'>Blog Application 🔥</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="mailto:artyom.shlyahtin285@gmail.com">Contact Us</a></li>
                <li><Link to="/add" className='add'>⚡ New Blog</Link></li>
            </ul>
            <BiMenu className="menu" onClick={toggleFunc} />
        </nav>
        <div className={toggle ? "sidenav active" : "sidenav"}>
          <div className="links">
            <Link to="/" onClick={toggleFunc}>
              <BiGridAlt className='link-i' />
              <p>Home</p>
            </Link>
            <a href="mailto:artyom.shlyahtin285@gmail.com" onClick={toggleFunc}>
              <BiCommentDetail className='link-i' />
              <p>Contact Us</p>
            </a>
            <Link to="/add" onClick={toggleFunc}>
              <BiAddToQueue className='link-i' />
              <p>Add blog</p>
            </Link>
          </div>
        </div>
        <div className={before ? "before active" : "before"} onClick={toggleFunc}></div>
    </div>
  )
}

export default Navbar