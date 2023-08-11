import React from "react";
import Logo from "../image/Newsbreak-ONA20-Logo-9-17.webp";
import App from "../search/search";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { Login } from "../../Page/authentication/login";

const NavBar = () => {
  return (
    <section className="header">
      <div className="logo_search">
        <img className="logo" src={Logo} style={{ width: "250px" }}></img>

        <App />
        <div className="user_infor">
          <Login />
        </div>
      </div>

      <header class="headerMenu">
        <nav>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="menu-icon">
            &#9776;
          </label>
          <ul class="menu">
            <li>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                onclick="activateNavItem(event, 'home')"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Sports"} style={{ textDecoration: "none" }}>
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Technology"} style={{ textDecoration: "none" }}>
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Business"} style={{ textDecoration: "none" }}>
                Business
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Entertainment"} style={{ textDecoration: "none" }}>
                Entertaiment
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default NavBar;

{
  /* <div className="nav_bar">
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          onclick="activateNavItem(event, 'home')"
        >
          Home
        </NavLink>
        <NavLink to={"/Sports"} style={{ textDecoration: "none" }}>
          Sports
        </NavLink>
        <NavLink to={"/Technology"} style={{ textDecoration: "none" }}>
          Technology
        </NavLink>
        <NavLink to={"/Business"} style={{ textDecoration: "none" }}>
          Business
        </NavLink>
        <NavLink to={"/Entertainment"} style={{ textDecoration: "none" }}>
          Entertaiment
        </NavLink>
      </div> */
}
