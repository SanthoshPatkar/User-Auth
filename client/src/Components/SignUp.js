import React from "react";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../CSS/style.css"

const SignUp = () => {
  return (
    <div className="signup">
      <div>
        <h3 className="mb-3">Sign Up</h3>
      </div>
      <form className="form_style">
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
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
          <label className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            autoComplete="off"
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            autoComplete="off"
            placeholder="Confirm Password"
          />
        </div>    
      </form>
      <div className="option m-2">
          <NavLink to="/login" className="option_name">I'm Already Registered</NavLink>
      </div>
      <button type="submit" className="btn mt-2 px-5 btn-primary">
          Register
        </button>
    </div>
  );
};

export default SignUp;
