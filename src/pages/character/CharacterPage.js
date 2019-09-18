//Libs
import React from 'react';
import {connect} from "react-redux";
import {IoIosAlbums, IoIosCard} from "react-icons/io";
//Components
import SideBar from "../include/sidebar/SideBar";
import SideBarWidget from "../include/sidebar/SideBarWidget";
//Imports
import {IconData} from '../../data/IconData.js';
import CharacterSelectionWidget from "./CharacterSelectionWidget";

//Handles looking at and modifying characters outside the game screen
class CharacterPage extends React.Component {

    constructor(props) {
        super(props);

        //Init state
        this.state = {
            showCharacterWidget: false,
            showSummaryWidget: true,
            showAttributesWidget: false,
            showInventoryWidget: false,
            showSkillsWidget: false,
            showActionsWidget: false
        }

        //Icon for displaying the character selector system
        this.characterSelectWidgetIcon = new IconData('Characters', () => <IoIosAlbums size={30}/>)
            .setShownAccessor(() => this.state.showCharacterWidget)
            .setClickCallBack((iconData, docked) => {
                this.setState({showCharacterWidget: true});
            });

        //Icon for showing the character summary
        this.characterWidgetIcon = new IconData('Summary', () => <IoIosCard size={30}/>)
            .setShownAccessor(() => this.state.showCharacterWidget)
            .setClickCallBack((iconData, docked) => {
                this.setState({showCharacterWidget: true});
            });
    }

    render() {

        //Icons for the sidebar
        const icons = [this.characterSelectWidgetIcon, this.characterWidgetIcon];

        return (
            <div id={"character-page"}>
                <SideBar icons={icons} iconProps={{
                    className: "icon30"
                }}/>
                <div className={"page-body"}>
                    {
                        this.characterWidgetIcon.show(() => (
                            <SideBarWidget onClick={() => this.setState({showCharacterWidget: false})}>
                                <CharacterSelectionWidget/>
                            </SideBarWidget>
                        ), () => null)
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);