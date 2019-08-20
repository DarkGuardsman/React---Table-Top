//Libs
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

//Component parts
import Header from "./pages/include/header/Header";
import Routes from "./pages/routes";
import NavMenu from "./pages/include/menu/NavMenu";

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./pages/include/footer/Footer";

function Layout() {
    return (
        <div id="outer-container" className={"h-100"}>
            <NavMenu/>
            <div id={"page-wrap"}>
                <Header/>
                <div id="page-content">
                    <Routes/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;
