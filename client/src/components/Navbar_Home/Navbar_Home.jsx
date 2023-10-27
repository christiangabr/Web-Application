import React from 'react'
import { Link } from "react-router-dom";
import './Navbar_Home.css'

const Navbar = () => {
  return (
    <div className='navbarHome'>
      <div className='navHomeContainer'>
        <span className="logo">Fuel Calculation</span>
        <div>
          <Link to="/register"><button className="navHomeButton">Sign Up</button></Link>
          <Link to="/login"><button className="navHomeButton">Sign In</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar