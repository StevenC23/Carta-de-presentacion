import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import {
  showNavigation,
  closeNavigation,
} from "../../utils/interactions/index";

const Navigation = () => {
  return (
    <nav>
      <div className="Navigation">
        <NavLink to="/" className="Logo">
          <h2>Logo</h2>
        </NavLink>
        <div className="Box" onClick={showNavigation}>
          <h2>Box</h2>
        </div>
        <ul className="Links-navigation ">
          <li>
            <NavLink to="/" onClick={closeNavigation}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={closeNavigation}>
              Works
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
