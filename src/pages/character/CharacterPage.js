import React from 'react';
import SideBar from "../include/sidebar/SideBar";
import {IconData} from '../../data/IconData.js';
import {IoIosArchive, IoIosArrowDropdown, IoIosAttach} from "react-icons/io";
import SideBarWidget from "../include/sidebar/SideBarWidget";

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
                                <p>Character Page Shown</p>
                            </SideBarWidget>
                        ), () => null)
                    }
                </div>
            </div>
        )
    }
}

export default CharacterPage;