import React,{useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../CSS/style.css";

const SignUp = () => {
  const history=useHistory();
  const [user,setUser]=useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:""
  })

  const handleSubmit = async (e) =>{
   
     e.preventDefault();
     
     const {name,email,phone,password,cpassword}=user;
     const res=await fetch("/register",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body: JSON.stringify({
         name,email,phone,password,cpassword
       })
     });
      const data= await res.json();
      if(data.status===422 || !data)
      {
        window.alert("Inavalid Registration")
        console.log("Invalid regstration")
      }
      else{
        window.alert("Successful Registration")
        console.log("Successful regstration")
        history.push('/login')
      }
  }
  return (
    <div className="sign">
      <div>
        <h3 className="mb-3">Sign Up</h3>
      </div>
      <div className="con_row p-2">
        <div className="con_form p-5" >
          <form className="form_style">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                autoComplete="off"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="off"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                autoComplete="off"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                placeholder="Phone Number"
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={(e) => setUser({ ...user, cpassword: e.target.value })}
                placeholder="Confirm Password"
              />
            </div>
          </form>
          <div className="option m-2">
            <NavLink to="/login" className="option_name">
              I'm Already Registered
            </NavLink>
          </div>
          <button type="submit" name="signin" value="signin" onClick={handleSubmit} className="btn mt-2 px-5 btn-primary">
            Register
          </button>
        </div>
        <div className="con_img">
          <img src="../Images/signup.png" alt="" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
