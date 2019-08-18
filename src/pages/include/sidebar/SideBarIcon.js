import React from 'react';
import PropTypes from 'prop-types';
import {IconData} from '../../../data/IconData.js';
import {Button} from "react-bootstrap";


class SideBarIcon extends React.Component {
    render() {
        const {icon, className} = this.props;
        return (
            <Button id={icon.id} className={className} onClick={icon.handleClick}> {icon.iconRender()} </Button>
        )
    }
}

SideBarIcon.propTypes = {
    icon: PropTypes.objectOf(IconData).isRequired
}

export default SideBarIcon;