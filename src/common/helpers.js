//Checks if the value is defined
export function isDefined(value) {
    return value !== undefined && value !== null;
}

export function isArray(value, checkLength = true) {
    return isDefined(value)
        && Array.isArray(value)
        && (!checkLength || value.length > 0);
}