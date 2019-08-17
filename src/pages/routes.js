import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./landing/HomePage";
import NotFoundPage from "./landing/404";
import NotAuthedPage from "./landing/NotAuthedPage";
import AboutPage from "./about/AboutPage";

export const ROUTES = [
    {
        path: "/",
        exact: true,
        title: () => <h2>Home</h2>,
        main: () => <HomePage/>
    },
    {
        path: "/about",
        exact: true,
        title: () => <h2>About</h2>,
        main: () => <AboutPage/>
    },
    {
        path: "/noAuth",
        exact: true,
        title: () => <h2>Not Authorized</h2>,
        main: () => <NotAuthedPage/>
    },
    {
        path: "",
        exact: false,
        title: () => <h2>Page Not Found</h2>,
        main: () => <NotFoundPage/>
    }
];

class Routes extends React.Component {

    render() {
        return (
            <Switch>
                {
                    //Generate routes from array
                    ROUTES.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))
                }
            </Switch>
        )
    }
}

export default Routes;