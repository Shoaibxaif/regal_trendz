import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Nav.css";
function Nav() {
  const [isSticky, setIsSticky] = useState(true);
  useEffect(() => {
    setIsSticky(true);
  }, []);
  return (
    <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-navigation">
        <div className="navbar-logo">
          <h1>RegalTrendZ</h1>
        </div>
        <div className="navbar-icons">
          <PersonIcon style={{ marginInline: "25px", cursor: "pointer" }} />
          <ShoppingCartIcon
            style={{ marginInline: "25px", cursor: "pointer" }}
          />
          <FavoriteIcon style={{ marginInline: "30px", cursor: "pointer" }} />
        </div>
      </div>
      <div className="navbar-search-items-navigation">
        <div className="search-items">
          <input type="text" placeholder="SEARCH REAGALTENDZ.." />{" "}
          <SearchIcon style={{ marginRight: "5px", cursor: "pointer" }} />
        </div>
        <div className="navigation-items">
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
          </ul>
        </div>
      </div>

      {/* <div className="Navbar-components nav-box4" onClick={NewMenu}>
        <MenuIcon />
      </div>
      <div className="nav-box5" id="nav-box5">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Men's</a>
          </li>
          <li>
            <a href="">Women's</a>
          </li>
          <li>
            <a href="">Kid's</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Nav;
