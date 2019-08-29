import React from "react";
import {connect} from "react-redux";
import {addCharacter, setCharacter} from "../../redux/actions/Actions";
import {GameCharacterData} from "../../data/character/CharacterData";
import {isDefined} from "../../common/helpers";

class CharacterSelectionWidget extends React.Component {

    render() {
        const {characters} = this.props;

        let charArray = [];

        //Generate character select buttons
        if (isDefined(characters)) {
            for (let i = 0; i < characters.length; i++) {
                let char = characters[i];
                charArray.push(
                    <button onClick={() => this.props.setCharacter(char)}>
                        Character {i}
                    </button>
                )
            }
        }

        //TODO add character sections to help organize a lot of sheets
        //TODO default with archive, templates, and current tabs

        //Add new char button to end of character list
        charArray.push(
            <button onClick={() => this.props.addCharacter(new GameCharacterData())}>
                New
            </button>
        );

        return (
            <div>
                <h1>Characters</h1>
                {
                    charArray
                }
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        characters: state.character.characters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addCharacter: (character) => dispatch(addCharacter(character)),
        setCharacter: (character) => dispatch(setCharacter(character))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelectionWidget);