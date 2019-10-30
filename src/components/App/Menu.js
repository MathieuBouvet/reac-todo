import React from "react";
import { Link } from "@reach/router";

import "./Menu.css";

const Menu = () => (
  <ul className="app-menu">
    <li className="menu-item">
      <Link to="login">
        <button>Sign In</button>
      </Link>
    </li>
    <li className="menu-item">
      <Link to="signup">
        <button>Sign Up</button>
      </Link>
    </li>
  </ul>
);

export default Menu;
