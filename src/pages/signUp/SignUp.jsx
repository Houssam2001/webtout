import React, {useEffect, useState} from "react";
import './signUp.css'
import {auth, registerWithEmailAndPassword} from "../../services/firebaseAuth";
import {useAuthState} from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useNavigate();
    const register = () => {
        if (!username) alert("Please enter name");
        registerWithEmailAndPassword(username, email, password);
    };
    // useEffect(() => {
    //     if (loading) return;
    //     if (user) history("/editor");
    // }, [user, loading]);
    const FacebookBackground =
        "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
        "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
        "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    return (
        <div>
            <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '20px',}}><h1><Link
                to='/' className='titre'>WebTout</Link></h1></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group mb-0">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h1>Sign Up</h1>
                                    <p className="text-muted">Register to webtout with full access</p>
                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="fa fa-user"/></span>
                                        <input type="text" className="form-control" placeholder="Username"
                                               value={username}
                                               onChange={(e) => setUserName(e.target.value)}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="fa fa-user"/></span>
                                        <input type="email" className="form-control" placeholder="email" value={email}
                                               onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-addon"><i className="fa fa-lock"/></span>
                                        <input type="password" className="form-control" placeholder="Password"
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn btn-primary px-4"
                                                    onClick={() => register(email, password)}>Login
                                            </button>
                                        </div>
                                        <div className="col-6 text-right">
                                            <button type="button" className="btn btn-link px-0">Forgot password?
                                            </button>
                                        </div>


                                        <button style={{
                                            borderStyle: 'none',
                                            marginLeft: '50px',
                                            marginRight: '25px',
                                            marginTop: '15px',
                                            display: "flex",
                                            width: "40px",
                                            height: "40px",
                                            background: `${FacebookBackground}`,
                                            borderRadius: "50%"
                                        }}>
                                            <text style={{
                                                margin: "auto",
                                                textAlign: 'center',
                                                color: 'white',
                                                fontSize: '20px'
                                            }}>f
                                            </text>
                                        </button>
                                        <button style={{
                                            borderStyle: 'none',
                                            marginLeft: '10px',
                                            marginRight: '15px',
                                            marginTop: '15px',
                                            display: "flex",
                                            width: "40px",
                                            height: "40px",
                                            background: `${InstagramBackground}`,
                                            borderRadius: "50%"
                                        }}>
                                            <text style={{margin: "auto", textAlign: 'center'}}>In</text>
                                        </button>
                                        <button style={{
                                            borderStyle: 'none',
                                            marginLeft: '10px',
                                            marginRight: '10px',
                                            marginTop: '15px',
                                            display: "flex",
                                            width: "40px",
                                            height: "40px",
                                            background: `${TwitterBackground}`,
                                            borderRadius: "50%"
                                        }}>
                                            <text style={{margin: "auto", textAlign: 'center'}}>Lin</text>
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div className="card text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                                <div className="card-body text-center">
                                    <div>
                                        <h2>Sign In</h2>
                                        <br/>
                                        <p>You are ready registred so be with with your previous account</p>
                                        <button type="button" className="btn btn-primary active mt-3">Sign In now!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*    <div className={"mainContainer"}>*/}
            {/*    <h1 style={{marginTop: '5%',*/}
            {/*        marginLeft: '15%',color:'black'}} >WebTout</h1>*/}

            {/*    <form className='form'>*/}
            {/*        <h3>Sign Up</h3>*/}
            {/*        <div className="form-group">*/}
            {/*            <label>Full Name</label>*/}
            {/*            <input type="text" className="form-control" placeholder="Enter Your Full Name"/>*/}
            {/*        </div>*/}
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
            {/*        <button type="submit" className="btn btn-primary btn-block">Register</button>*/}
            {/*        <p className="forgot-password text-right">*/}
            {/*            Forgot <a href="#">password?</a>*/}
            {/*        </p>*/}
            {/*    </form>*/}
            {/*    <Link style={{marginTop: '5%',marginLeft:'0',*/}
            {/*        marginRight: '5%',color:'black'}} to='/' className={"bx bx-x-circle bx-md"}/>*/}
            {/*</div>*/}
        </div>

    )
}
export default SignUp
