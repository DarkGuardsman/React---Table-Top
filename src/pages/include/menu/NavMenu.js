import React from 'react';
import {scaleDown as Menu} from "react-burger-menu";
import {ROUTES} from "../../routes";
import {NavLink} from "react-router-dom";

import './NavMenu.css';

class NavMenu extends React.Component {
    render() {
        return (
            <Menu>
                {
                    //Generate routes from array
                    ROUTES.map((route, index) => (
                        <NavLink to={route.path}> {route.path} </NavLink>
                    ))
                }
            </Menu>
        )
    }
}

export default NavMenu;