import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";

import { useNavigate } from "react-router";
import Navigation from "./Navigation";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;

  const nav = useNavigate();
  const login = async () => {
    const { data } = await Axios.post("http://localhost:3001/login", {
      name: username,
      password: password,
    });
    if (data.message) {
      setLoginStatus(data.message);
      console.log(data.message);
      localStorage.setItem("hardikSubmissionEmail", JSON.stringify(username));
      localStorage.setItem("hardikSubmissionPassword",JSON.stringify(password));
  
      
    } else {
      localStorage.setItem("userid",data.id);
      console.log(data.id)
      nav("/Main");
    }

    setUsername("");
    setPassword("");
  };

  //request if the user session  exists
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((res) => {
      if (res.data.loggedIn === true) {
        setLoginStatus(res.data.user[0].name);
      }
    });
  }, []);
  return (
    <div className="hero">
      <Navigation />

      <div className="form-box">
        <center>
          {" "}
          <h3 className="tite">Login</h3>
        </center>

        <div className="form-group">
          <label>
            <i class="zmdi zmdi-account"></i>
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">
            <i class="zmdi zmdi-lock"></i>
          </label>

          <input
            type="password"
            placeholder="Password"
            className="input-field"
            requi
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-box">
          <button className="submit-btn" onClick={login}>
            Login
          </button>
        </div>
        <h1>{loginStatus}</h1>
      </div>
    </div>
  );
}
