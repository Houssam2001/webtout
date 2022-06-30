import React, {useEffect} from "react";
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
import Editor from "./editor/Editor";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../services/firebaseAuth";
import App1 from "./dash/App";
import {MaterialUIControllerProvider} from "./dash/context";
import SiteEdit from "./SiteEdit/SiteEdit";


const Layout = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Router>
                {!user ?
                <Routes>
                        <Route path="/" exact element={<App/>}/>
                        <Route path="/signUp" element={<SignUp/>}/>
                        <Route path="/market" element={<Market/>}/>
                        <Route path="/editor" element={<Editor/>}/>
                        <Route element={<Page404/>} path={'*'}/>
                        <Route path="/login" element={<Login/>}/>
                </Routes>:
                    (<MaterialUIControllerProvider> <App1/></MaterialUIControllerProvider>)}
                <Routes>
                    <Route path="/editor" element={<Editor/>}/>
                </Routes>
            </Router>

        </div>
    )
}
export default Layout
