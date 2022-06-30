import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
// import './assets/boxicons-2.0.7/css/boxicons.min.css'
// import './assets/css/grid.css'
// import './assets/css/theme.css'
// import './assets/css/index.css'
import Layout from "./pages/Layout";
ReactDOM.render(

        <React.StrictMode>
            <Layout />
        </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
