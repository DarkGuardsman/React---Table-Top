import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {IconData} from '../../../data/IconData.js';
import SideBarIcon from "./SideBarIcon.js";
//Css
import './SideBar.css';

class SideBar extends React.Component {
    render() {
        const {icons, iconProps, ...rest} = this.props;
        return (
            <div className={'iconBar page-full'} {...rest}>
                {
                    //Generate icons
                    icons
                        .filter(icon => icon.isDocked())
                        .map((icon, index) => (
                            <Fragment>
                                <SideBarIcon icon={icon} {...iconProps}/>
                                <br/>
                            </Fragment>
                        ))
                }
            </div>
        )
    }
}

SideBar.propTypes = {
    iconData: PropTypes.arrayOf(IconData).isRequired
}

export default SideBar;