import React from 'react';
import './App.css';
import Routes from "./pages/routes";
import NavMenu from "./pages/include/menu/NavMenu";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./pages/include/header/Header";

function App() {
    return (
        <Router>
            <div id="outer-container">
                <NavMenu/>
                <main id={"page-wrap"}>
                    <div id={"app-root"}>
                        <Header/>
                        <div className="wrapper">
                            <div id="content">
                                <Routes/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
