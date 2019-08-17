import React from 'react';
import PropTypes from 'prop-types';
import {IconData} from '../../../data/IconData.js';
import SideBarIcon from "./SideBarIcon";


class SideBar extends React.Component {
    render() {
        const {iconData, ...rest} = this.props;
        return (
            <div className={'iconBar'} {...rest}>
                <ul className={'iconBarList'}>
                {
                    //Generate icons
                    iconData.map((iconData, index) => (
                        <li><SideBarIcon icon={iconData}/></li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

SideBar.propTypes = {
    iconData: PropTypes.arrayOf(IconData).isRequired
}

export default SideBar;