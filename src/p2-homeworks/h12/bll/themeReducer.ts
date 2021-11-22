const initState = {
    colour: 'dark'
};
export type initStateType = {
    colour: string
}
export const themeReducer = (state = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "colour": {
            return {...state, colour: action.colour};
        }
        default:
            return state;
    }
};
type changeThemeCType = ReturnType<typeof changeThemeC>

export const changeThemeC = (colour: string) => {
    return {type: 'colour', colour} as const
}; // fix any