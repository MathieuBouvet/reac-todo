import React from "react";
import { Link } from "@reach/router";

import Button from "../Button";

import "./Menu.css";

const Menu = () => (
  <ul className="app-menu">
    <li className="menu-item">
      <Link to="login">
        <Button primaryColor="white">Sign In</Button>
      </Link>
    </li>
    <li className="menu-item">
      <Link to="signup">
        <Button primaryColor="white">Sign Up</Button>
      </Link>
    </li>
  </ul>
);

export default Menu;
