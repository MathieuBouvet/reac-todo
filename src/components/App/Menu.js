import React from "react";
import { Link } from "@reach/router";

import "./Menu.css";

const Menu = () => (
  <ul className="app-menu">
    <li className="menu-item">
      <Link to="login">Sign In</Link>
    </li>
    <li className="menu-item">
      <Link to="signup">Sign Up</Link>
    </li>
  </ul>
);

export default Menu;
