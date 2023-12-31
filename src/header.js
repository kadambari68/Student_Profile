import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import "./header.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SYNC.IN
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                Attendance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                Marksheets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                Timetable
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                Bus Facility
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                Order food
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                Project review
              </Link>
            </li>

            <li>
              <Link className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Out
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN OUT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
