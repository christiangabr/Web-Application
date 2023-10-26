import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar_User.css";
import { useLogout } from "../../hook/useLogout";
import { useAuthContext } from "../../hook/useAuthContext";

const Navbar_User = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate('/')
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <img src="/gasoline.png" alt="" className="gashandle" />
        </Link>
        {user && (
          
          <div>
            <Link to="/hub" className="user-link-button">
              <button className="navButton">Hub</button>
            </Link>
            <Link to="/profile" className="user-link-button">
              <button className="navButton">Profile</button>
            </Link>
            <Link to="/fuelquote" className="user-link-button">
              <button className="navButton">Fuel Quote Form</button>
            </Link>
            <Link to="/fuelquotehistory" className="user-link-button">
              <button className="navButton">Fuel Quote History</button>
            </Link>
            
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div className="navItems">
            <Link to="/hub" className="user-link-button">
              <button className="navButton">Hub</button>
            </Link>
            <Link to="/profile" className="user-link-button">
              <button className="navButton">Profile</button>
            </Link>
            <Link to="/fuelquote" className="user-link-button">
              <button className="navButton">Fuel Quote Form</button>
            </Link>
            <Link to="/fuelquotehistory" className="user-link-button">
              <button className="navButton">Fuel Quote History</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar_User;
