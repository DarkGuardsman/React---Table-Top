import {ADD_CHARACTER, SET_AUTH_TOKEN, SET_CHARACTER} from "../actions/ActionTypes";
import {isDefined} from "../../common/helpers";

//Information about the authentication state
const authState = {
    auth_token: null,   //Token to use with rest API
    permissions: null   //nodes that allow access to features
}

//Information about the currently selected character
const characterState = {
    characterName: null,     //Display name of the character sheet
    characterSave: null,     //Save location
    characterData: null     //Data for the character sheet
}

//Information about the user
const userState = {
    username: null,     //Display name of the user
    characters: null    //Array of characters that can be displayed
}

const initialState = {
    ...authState,
    ...characterState,
    ...userState
}

function rootReducer(originalState = initialState, action) {

    const type = action.type;
    const payload = action.payload;

    //Clone state for editing, if we don't clone rendering will not trigger
    let state = {...originalState};

    //Set Auth token
    if (type === SET_AUTH_TOKEN) {
        state.auth_token = payload;
    }

    //Character stuff
    else if (type === SET_CHARACTER) {
        //Set as current character
        state.characterData = payload;
    } else if (type === ADD_CHARACTER) {

        //Set as current character
        state.characterData = payload;

        //Add to character list
        if (isDefined(state.characters)) {
            state.characters.push(payload);
        } else {
            state.characters = [payload];
        }
    }

    return state;
}

export default rootReducer;