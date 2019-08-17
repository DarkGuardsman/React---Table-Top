import React from 'react';
import SideBar from "../include/sidebar/SideBar";
import {IconData} from '../../data/IconData.js';
import { IoIosArchive, IoIosArrowDropdown, IoIosAttach } from "react-icons/io";

class CharacterPage extends React.Component {
    //TODO save/load/character selector
    //Summary widget (hp, coins, xp)
    //Attributes widget (split into two sub areas)
    //Items widget (inventory)
    //Skills widget
    //Actions widget
    render() {
        const iconData = [
            new IconData(null, 'Home', () => <IoIosArchive/>).setClickCallBack((iconData) => alert("I are clicked")),
            new IconData(null, 'Home2', () => <IoIosArrowDropdown/>),
            new IconData(null, 'Home3', () => <IoIosAttach/>)
        ]

        return (
            <div>
                <SideBar iconData={iconData} />
            </div>
        )
    }
}

export default CharacterPage;