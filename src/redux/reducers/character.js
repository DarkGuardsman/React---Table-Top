import {ADD_CHARACTER, SET_CHARACTER} from "../actions/ActionTypes";
import {isArray, isDefined} from "../../common/helpers";

const initialState = {
    characterName: null,     //Display name of the character sheet
    characterSave: null,     //Save location
    characterData: null     //Data for the character sheet
}

function characterReducer(originalState = initialState, action) {

    const type = action.type;
    const payload = action.payload;

    //Clone state for editing, if we don't clone rendering will not trigger
    let state = {...originalState};

    //Character stuff
    if (type === SET_CHARACTER) {
        //Set as current character
        state.characterData = payload;
    } else if (type === ADD_CHARACTER) {

        //Set as current character
        state.characterData = payload;

        //Add to character list
        if (isArray(state.characters)) {
            state.characters = state.characters.concat(payload);
        } else {
            state.characters = [payload];
        }
    }

    return state;
}

export default characterReducer;