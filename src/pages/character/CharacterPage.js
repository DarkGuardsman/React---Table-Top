//Libs
import React from 'react';
import {connect} from "react-redux";
import {IoIosArchive, IoIosArrowDropdown, IoIosAttach} from "react-icons/io";

//Components
import SideBar from "../include/sidebar/SideBar";
import SideBarWidget from "../include/sidebar/SideBarWidget";

//Imports
import {IconData} from '../../data/IconData.js';

class CharacterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showCharacterWidget: false,
            showSummaryWidget: true,
            showAttributesWidget: false,
            showInventoryWidget: false,
            showSkillsWidget: false,
            showActionsWidget: false
        }

        this.characterWidgetIcon = new IconData('Characters', () => <IoIosArchive size={30}/>)
            .setShownAccessor(() => this.state.showCharacterWidget)
            .setClickCallBack((iconData, docked) => {
                this.setState({showCharacterWidget: true});
            });
    }

    render() {
        const icons = [this.characterWidgetIcon];

        return (
            <div id={"character-page"}>
                <SideBar icons={icons} iconProps={{
                    className: "icon30"
                }}/>
                <div className={"page-body"}>
                    {
                        this.characterWidgetIcon.show(() => (
                            <SideBarWidget onClick={() => this.setState({showCharacterWidget: false})}>
                                {

                                }
                            </SideBarWidget>
                        ), () => null)
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);