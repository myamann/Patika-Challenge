import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Login = () => {
  const userName = localStorage.getItem("name");
  const userLastname = localStorage.getItem("lastname");
  const [name, setName] = useState(userName);
  const [lastname, setLastname] = useState(userLastname);

  let history = useHistory();
  const nameHandler = (e) => {
    if (name) {
      localStorage.setItem("name", name);
    }
  };
  const lastNameHandler = (e) => {
    if (lastname) {
      localStorage.setItem("lastname", lastname);
    }
  };

  return (
    <div className="login">
      <form>
        <label htmlFor="firstname" for="validationCustom04">
          <b>Firstname</b>
        </label>
        <input
          type="text"
          placeholder="Enter Firstname"
          id="validationCustom04"
          required
          name="firstname"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="surname" for="validationCustom03">
          <b>Surname</b>
        </label>
        <input
          type="text"
          placeholder="Enter Surname"
          name="surname"
          id="validationCustom03"
          required
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (name && lastname) {
              history.push("/");
            }
            nameHandler();
            lastNameHandler();
          }}
        >
          <FiHome />
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
