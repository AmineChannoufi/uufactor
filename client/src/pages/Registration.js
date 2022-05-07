import React, { useEffect, useState } from "react";
import Axios from "axios";
import fb from "./../assets/fb.png";
import gmail from "./../assets/gmail.png";
import twitter from "./../assets/twitter.png";

import { FiUser } from "react-icons/fi";
import "./Registration.css";
import { useNavigate } from "react-router";
import Validation from "./Validation";
import Navigation from "./Navigation";
export default function Registration() {
  const nav = useNavigate();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [telephoneReg, settelephoneReg] = useState("");
  const [societeReg, setSocieteReg] = useState("");
  const [values, setValues] = useState("");
  const [errors, setErrors] = useState("");

  Axios.defaults.withCredentials = true;
  //  const handleFormSubmit=(event)=>{
  //    event.preventDefault();
  //    setErrors(Validation(values))
  //       register();

  //   }
  const register = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/register", {
      name: usernameReg,
      password: passwordReg,
      email: emailReg,
      telephone: telephoneReg,
      societe: societeReg,
    })
      .then((res) => {
        if (res) {
          nav("/login");
        }
        // setUsernameReg("");
        // setPasswordReg("");
        // setEmailReg("");
        // settelephoneReg("");
        // setSocieteReg("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <Navigation />
      <div className="hero">
        <div className="form-box">
          <center >
          <h3 className="form-title">
            Registration
          </h3>
          </center>
          <form className="register-form" id="register-form">
            <div id="register" className="form-group">
              <form className="input-groupe">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  name="username"
                  className="input-field"
                  type="text"
                  id="username"
                  autoComplete="off"
                  placeholder="Your username"
                  icon={<FiUser />}
                  value={usernameReg}
                  onChange={(e) => setUsernameReg(e.target.value)}
                  required
                />
                {/* {errors.username && <p className="error">{errors.username}</p>} */}

                <div className="form-group">
                  <label htmlFor="email">
                    {" "}
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    className="input-field"
                    name="email"
                    type="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your email"
                    value={emailReg}
                    onChange={(e) => setEmailReg(e.target.value)}
                    required
                  />
                  {/* {errors.email && <p className="error">{errors.email}</p>} */}
                </div>
                <div className="form-group">
                  <label>
                    <i class="zmdi zmdi-balance"></i>
                  </label>
                  <input
                    className="input-field"
                    type="text"
                    id="societe"
                    autoComplete="off"
                    placeholder="Your company"
                    value={societeReg}
                    onChange={(e) => setSocieteReg(e.target.value)}
                    required
                  />
                  {/* {errors.societe && <p className="error">{errors.societe}</p>} */}
                </div>

                <div className="form-group">
                  <label>
                    <i class="zmdi zmdi-phone"></i>
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                    id="tel"
                    autoComplete="off"
                    placeholder="Your number"
                    value={telephoneReg}
                    onChange={(e) => settelephoneReg(e.target.value)}
                    required
                    pattern="[0-9]{8}"
                  />
                </div>

                {/* {errors.telephone && <p className="error">{errors.telephone}</p>} */}

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    className="input-field"
                    id="password"
                    autoComplete="off"
                    placeholder="Your password"
                    value={passwordReg}
                    onChange={(e) => setPasswordReg(e.target.value)}
                    required
                  />
                </div>
                {/* {errors.password && <p className="error">{errors.password}</p>} */}
                <div className="button-box">
                  <button  onClick={register} className="submit-btn"> Register </button>
                  <div className="social-icons">
                    {/* <img src={fb} alt="fb" /> */}
                    {/* <img src={gmail} alt="gm" /> */}
                    {/* <img src={twitter} alt="tw" /> */}
                  </div>
                  
                </div>
              </form>
            </div>
          </form>
        </div>
      </div>
    </form>
  );
}
