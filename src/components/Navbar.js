import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const Navbar = ({ show }) => {
  const userName = localStorage.getItem("name");
  const userLastname = localStorage.getItem("lastname");

  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <div className="profile">
        <img src={logo} alt="Logo" className="logo" />
        <p>
          <i>
            {userName} {userLastname}
          </i>
        </p>
      </div>
      <ul>
        <li>
          <Link to="/">
            <FiHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BsPersonFill />
            About
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdWork />
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
