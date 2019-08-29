//Information about the authentication state
import {SET_AUTH_TOKEN} from "../actions/ActionTypes";

const initialState = {
    auth_token: null,   //Token to use with rest API
    permissions: null,   //nodes that allow access to features
    username: null,     //Display name of the user
    characters: null    //Array of characters that can be displayed
}

function authReducer(originalState = initialState, action) {

    const type = action.type;
    const payload = action.payload;

    //Clone state for editing, if we don't clone rendering will not trigger
    let state = {...originalState};

    //Set Auth token
    if (type === SET_AUTH_TOKEN) {
        state.auth_token = payload;
    }

    return state;
}

export default authReducer;