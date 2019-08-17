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
