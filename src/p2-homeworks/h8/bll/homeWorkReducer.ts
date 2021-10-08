import {ActionType, UserType} from "../HW8";


export const homeWorkReducer = (state: UserType, action: ActionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newArr = [...state]
            return action.payload === 'up' ? newArr.sort((a, b) => a.age > b.age ? 1 : -1) : newArr ||
            action.payload === 'down' ? newArr.sort((a, b) => a.age < b.age ? 1 : -1) : newArr
        }
        case 'check': {
            let newArr = [...state]
            return action.payload === 18 ? newArr.filter(t => t.age>=18) :newArr
        }
        default:
            return state
    }
}