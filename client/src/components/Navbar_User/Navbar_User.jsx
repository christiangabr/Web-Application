import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar_User.css";


const Navbar_User = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/'><img src="/gasoline.png" alt="" className='gashandle'/></Link>
        <div className='navItems'>
          <Link to="/hub" className='user-link-button'><button className='navButton'>Hub</button></Link>
          <Link to="/profile" className='user-link-button'><button className='navButton'>Profile</button></Link>
          <Link to="/fuelquote" className='user-link-button'><button className='navButton'>Fuel Quote     Form</button></Link>
          <Link to="/fuelquotehistory" className='user-link-button'><button className='navButton'>Fuel Quote History</button></Link>  
        </div>    
      </div>
    </div>
  )
}

export default Navbar_User