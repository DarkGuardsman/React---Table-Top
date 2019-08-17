import React from 'react';
import {scaleDown as Menu} from "react-burger-menu";
import {ROUTES} from "../../routes";
import {NavLink} from "react-router-dom";

import './NavMenu.css';
import {isDefined} from "../../../common/helpers";

class NavMenu extends React.Component {
    render() {
        return (
            <Menu>
                {
                    //Generate routes from array
                    ROUTES
                        .filter(route => isDefined(route.path) && isDefined(route.link))
                        .map((route, index) => (
                            <NavLink to={route.path}> {route.link()} </NavLink>
                        ))
                }
            </Menu>
        )
    }
}

export default NavMenu;