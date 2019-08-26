import {ADD_CHARACTER, SET_CHARACTER} from "./ActionTypes";

export function setValue(type, payload) {
    return {
        type: type,
        payload
    }
}

export function setCharacter(characterData) {
    return {
        type: SET_CHARACTER,
        payload: characterData
    }
}

export function addCharacter(characterData) {
    return {
        type: ADD_CHARACTER,
        payload: characterData
    }
}