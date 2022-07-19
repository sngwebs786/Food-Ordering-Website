import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "../assets/styles/Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  //setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //change nav color when scrolling
  const [color, setColor] = useState(false);
  console.log(props);
  const changeColor = () => {
    if (props.trans === "true") {
      if (window.scrollY >= 420) {
        setColor(true);
      } else {
        setColor(false);
      }
    } else {
      if (window.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };

  window.addEventListener("scroll", changeColor);
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          <img
            src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/sticky.svg"
            alt="logo"
          />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item nav-item2">
            <Link to="/home">
              <a onClick={closeMenu}>
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item nav-item2">
            <a href="#deals" onClick={closeMenu}>
              Deals
            </a>
          </li>
          <li className="nav-item nav-item2">
            <a href="#clients" onClick={closeMenu}>
              Clients
            </a>
          </li>
          <li className="nav-item nav-item2">
            <a href="#team" onClick={closeMenu}>
              Team
            </a>
          </li>

          <li className="nav-item">
            <Badge badgeContent={5} color="secondary">
              <ShoppingCartIcon style={{ color: "#f7c305" }}></ShoppingCartIcon>
            </Badge>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
