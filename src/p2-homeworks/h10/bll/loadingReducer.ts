const initState = {
    isLoading: false
}
export type loadingAC =
    {
        type: 'LOADING',
        isLoading: boolean
    }
type stateType = {
    isLoading:boolean
}
export const loadingReducer = (state = initState, action: loadingAC): stateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading:action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading:boolean): loadingAC => {
    return {
        type: 'LOADING',
        isLoading
    }
}