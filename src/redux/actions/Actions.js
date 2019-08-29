import {ADD_CHARACTER, SET_CHARACTER} from "./ActionTypes";

export function setValue(type, payload) {
    console.log("Set Value[" + type + "]", payload);
    return {
        type: type,
        payload
    }
}

export function setCharacter(characterData) {
    console.log("Set character", characterData);
    return {
        type: SET_CHARACTER,
        payload: characterData
    }
}

export function addCharacter(characterData) {
    console.log("Add character", characterData);
    return {
        type: ADD_CHARACTER,
        payload: characterData
    }
}