import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./landing/HomePage";
import NotFoundPage from "./landing/404";
import NotAuthedPage from "./landing/NotAuthedPage";
import AboutPage from "./about/AboutPage";
import CharacterPage from "./character/CharacterPage";

export const ROUTES = [
    {
        path: "/",
        exact: true,
        link: () => "Home",
        main: () => <HomePage/>
    },
    {
        path: "/about",
        exact: true,
        link: () => "About",
        main: () => <AboutPage/>
    },
    {
        path: "/characters",
        exact: true,
        link: () => "Characters",
        main: () => <CharacterPage/>
    },
    {
        path: "/noAuth",
        exact: true,
        main: () => <NotAuthedPage/>
    },
    {
        path: "",
        exact: false,
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