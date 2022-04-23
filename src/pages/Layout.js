import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import App from "../App";
import Login from "./Login/Login";
import SignUp from "./signUp/SignUp";
import Market from "./Market/Market";
import Page404 from "./404/Page404";

const Layout = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<App/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="/market" element={<Market/>}/>
                    <Route element={<Page404/>} path={'*'}/>
                </Routes>
            </Router></div>
    )
}
export default Layout
