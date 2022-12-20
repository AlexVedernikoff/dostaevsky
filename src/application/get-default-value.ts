export function getDefaultValue(state) {
    if (Array.isArray(state)) {
        return state;
    }
    if (typeof state === "string") {
        return typeof state === "undefined" ? "" : `${state}`;
    }
    return [];
}
