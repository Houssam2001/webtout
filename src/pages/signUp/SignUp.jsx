import React from "react";
import {Link} from "react-router-dom";
import './signUp.css'
const SignUp = () => {
  return (
      <div className={"mainContainer"}>
          <h1 style={{marginTop: '5%',
              marginLeft: '15%',color:'black'}}>WebTout</h1>

          <form className='form'>
              <h3>Sign Up</h3>
              <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter Your Full Name"/>
              </div>
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email"/>
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password"/>
              </div>
              <div className="form-group">
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                      <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                  </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Register</button>
              <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
              </p>
          </form>
          <Link style={{marginTop: '5%',marginLeft:'0',
              marginRight: '5%',color:'black'}} to='/' className={"bx bx-x-circle bx-md"}/>
      </div>
  )
}
export  default SignUp
