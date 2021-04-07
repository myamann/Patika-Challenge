import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import wave from "../assets/bluewave.png";
import profile from "../assets/profile.svg";
import undrawPerson from "../assets/undraw_personalization.svg";

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
    <div className="login-page-body">
      <img className="wave" alt="wave" src={wave} />
      <div className="login-page-container">
        <div className="img">
          <img src={undrawPerson} alt="person" />
        </div>
        <div className="login-container">
          <form className="login-form" action="#">
            <img className="avatar" src={profile} alt="profile" />

              <h2>Welcome</h2>
            

            <div className="input-div one ">
              <div className="i">
                <i className="fas fa-arrow-right"></i>
              </div>
              <div>
              <label htmlFor="firstname" for="validationCustom04">
              <h5>Firstname</h5>
            </label>
                
                <input
                maxLength="10"
                  className="login-input"
                  type="text"
                  id="validationCustom04"
                  required
                  name="firstname"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="input-div two" onF>
              <div className="i">
                <i className="fas fa-arrow-right"></i>
              </div>
              <div>
                <label htmlFor="surname" for="validationCustom03">
                  <h5>Lastname</h5>
                </label>

                <input
                maxLength="10"
                  className="login-input"
                  type="text"
                  name="surname"
                  id="validationCustom03"
                  required
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </div>
            </div>
            <p className="login-info">Please enter your information</p>
            <input
              type="submit"
              className="login-btn"
              value="Login"
              onClick={() => {
                if (name && lastname) {
                  history.push('/home');
                }
                nameHandler();
                lastNameHandler();
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
