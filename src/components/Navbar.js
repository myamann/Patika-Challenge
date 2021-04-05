import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({show}) => {
  return (
    <div className={ show ? 'sidenav active' : 'sidenav'}>
      <div className="profile">
        <img src={logo} alt="Logo" className="logo" />
        <p><i>Mehmet Yaman</i></p>
      </div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Me</a>
        </li>
        <li>
          <a href="/">Categories</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
