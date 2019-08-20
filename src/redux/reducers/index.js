import {SET_AUTH_TOKEN} from "../actions/ActionTypes";

const authState = {
    auth_token: null
}

const characterState = {
    name: null,
    save: null,
    data : null
}


const initialState = {
    ...authState,
    ...characterState
}

function rootReducer(originalState = initialState, action) {

    const type = action.type;
    const payload = action.payload;

    //Clone state for editing, if we don't clone rendering will not trigger
    let state = {...originalState};

    //Set Auth token
    if(type === SET_AUTH_TOKEN) {
        state.auth_token = payload;
    }

    return state;
}

export default rootReducer;