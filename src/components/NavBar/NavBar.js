import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Contact } from './../../Pages/Contact/Contact';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            {/* <i className="fas fa-book">   </i> */}
            &nbsp;&nbsp; Leksika.uz
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                EN-UZ-EN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ru"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                RU-UZ-RU
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/learn-english"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Learning English
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/uzbek-local"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Uzbek Localization
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/for-freelancers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                For Freelancers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
