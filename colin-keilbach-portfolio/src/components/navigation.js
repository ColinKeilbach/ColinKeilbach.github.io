import "./navigation.css";
import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="NavigationBar">
      <NavLink className="NavItem" to="/" id="item-a">
        Home
      </NavLink>
      <NavLink className="NavItem" to="/all-projects" id="item-b">
        All Projects
      </NavLink>
    </div>
  );
};

export default Navigation;
