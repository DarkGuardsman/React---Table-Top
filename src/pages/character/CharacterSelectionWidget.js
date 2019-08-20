import React from "react";
import {connect} from "react-redux";

class CharacterSelectionWidget extends React.Component {

    render() {
        return (
            <div>
                <h1>Characters</h1>
                <button onClick={}>New</button>
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
        setCharacter :
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelectionWidget);