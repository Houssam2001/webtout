import './login.css'
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Link, useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, logInWithEmailAndPassword} from "../../services/firebaseAuth";

function Login() {
    const FacebookBackground =
        "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
    const InstagramBackground =
        "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
    const TwitterBackground =
        "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
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
                                    <h1>Login</h1>
                                    <p className="text-muted">Sign In to your account</p>
                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="fa fa-user"/></span>
                                        <input type="email" className="form-control" placeholder="email" value={email}
                                               onChange={(e1) => setEmail(e1.target.value)}/>
                                    </div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-addon"><i className="fa fa-lock"/></span>
                                        <input type="password" className="form-control" placeholder="Password" value={password}
                                               onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn btn-primary px-4"
                                                    onClick={() => logInWithEmailAndPassword(email, password)}>Login
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
                                        <h2>Sign up</h2>
                                        <br/>
                                        <p>Add Your Account To Get Full Access And Better building for your Website </p>
                                        <button type="button" onClick={()=>navigate('/signUp')}  className="btn btn-primary active mt-3">

                                            Register
                                            Now!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}


export default Login;
