import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import SideBarIcon from "./SideBarIcon";

class SideBarWidget extends React.Component {
    render() {
        const {onClick, children} = this.props;
        return (
            <div>
                <Button onClick={onClick}> Hide </Button>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

SideBarIcon.propTypes = {
    onClick : PropTypes.func.isRequired
}

export default SideBarWidget;