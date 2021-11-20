import React from "react";
import { NavLink } from "react-router-dom";

import "./Menubar.css";

const Menubar = () => {
  return (
    <div className="menubar">
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "activeLink" : "")}
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "activeLink" : "")}
        to="/new-tweet"
      >
        New Tweet
      </NavLink>
    </div>
  );
};

export default Menubar;
