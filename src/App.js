//Libs
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux"

import rootReducer from "./redux/reducers";
//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout";


const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Layout/>
            </Router>
        </Provider>
    );
}

export default App;
