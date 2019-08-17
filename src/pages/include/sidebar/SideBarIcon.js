import React from 'react';
import PropTypes from 'prop-types';
import {IconData} from '../../../data/IconData.js';
import {Button} from "react-bootstrap";


class SideBar extends React.Component {
    render() {
        const {icon} = this.props;
        return (
            <Button id={icon.id} onClick={icon.handleClick}> {icon.iconRender()} </Button>
        )
    }
}

SideBar.propTypes = {
    icon: PropTypes.objectOf(IconData).isRequired
}

export default SideBar;