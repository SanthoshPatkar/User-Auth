import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="sign log">
      <div>
        <h3 className="mb-3">Login</h3>
      </div>
      <div className="con_row p-2">
        <div className="con_img">
          <img src="../Images/login.png" alt="" width="80%" height="80%" />
        </div>
        <div className="con_form p-5">
          <form className="form_style">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Password"
              />
            </div>
          </form>
          <div className="option m-2">
            <NavLink to="/signup" className="option_name">
              Create Your Account
            </NavLink>
          </div>
          <button type="submit" name="login" value="signin" className="btn mt-2 px-5 btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
