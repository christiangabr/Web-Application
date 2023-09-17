import React from 'react'
import { Link } from "react-router-dom";
import './Navbar_Home.css'

const Navbar = () => {
  return (
    <div className='navbarHome'>
      <div className='navHomeContainer'>
        <Link to="/hub" style={{ color: "inherit", textDecoration: "none"}}>
          <span className="logo">Name Placeholder</span>
        </Link>
        <div>
          <Link to="/register"><button className="navHomeButton">Sign Up</button></Link>
          <Link to="/login"><button className="navHomeButton">Sign In</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar