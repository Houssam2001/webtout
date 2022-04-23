import './login.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
function Login() {
    const FacebookBackground =
        "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
        "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
        "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card-group mb-0">
                                <div className="card p-4">
                                    <div className="card-body">
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <div className="input-group mb-3">
                                            <span className="input-group-addon"><i className="fa fa-user"/></span>
                                            <input type="text" className="form-control" placeholder="Username"/>
                                        </div>
                                        <div className="input-group mb-4">
                                            <span className="input-group-addon"><i className="fa fa-lock"/></span>
                                            <input type="password" className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <button type="button" className="btn btn-primary px-4">Login</button>
                                            </div>
                                            <div className="col-6 text-right">
                                                <button type="button" className="btn btn-link px-0">Forgot password?
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card text-white bg-primary py-5 d-md-down-none" style={{width:'44%'}}>
                                    <div className="card-body text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <br/>
                                            <p>Add Your Account To Get Full Access And Better building for your Website </p>
                                            <button type="button" className="btn btn-primary active mt-3">Register
                                                Now!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className={"mainContainer"}>*/}
                    {/*    <h1 style={{marginTop: '5%',*/}
                    {/*        marginLeft: '15%',color:'black'}}>WebTout</h1>*/}
                    {/*    <form className='form'>*/}
                    {/*        <h3>Sign In</h3>*/}
                    {/*        <div className="form-group">*/}
                    {/*            <label>Email address</label>*/}
                    {/*            <input type="email" className="form-control" placeholder="Enter email"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="form-group">*/}
                    {/*            <label>Password</label>*/}
                    {/*            <input type="password" className="form-control" placeholder="Enter password"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="form-group">*/}
                    {/*            <div className="custom-control custom-checkbox">*/}
                    {/*                <input type="checkbox" className="custom-control-input" id="customCheck1"/>*/}
                    {/*                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <button type="submit" className="btn btn-primary btn-block">Submit</button>*/}
                    {/*        <p className="forgot-password text-right">*/}
                    {/*            Forgot <a href="#">password?</a>*/}
                    {/*        </p>*/}
                    {/*    </form>*/}
                    {/*    <Link style={{marginTop: '5%',marginLeft:'0',*/}
                    {/*        marginRight: '5%',color:'black'}} to='/' className={"bx bx-x-circle bx-md"}/>*/}
                    {/*</div>*/}
                </div>
    );
}


export default Login;
