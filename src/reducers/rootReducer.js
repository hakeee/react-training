import * as Actions from '../constants/actionTypes'

const initialState = {
    sum: 0,
    input: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADDITION:
            return {
                ...state,
                sum: Number(state.sum) + ((state.input !== null) ? Number(state.input) : 0),
                input: null 
            }
        case Actions.SUBTRACTION:
            return {
                ...state,
                sum: Number(state.sum) - ((state.input !== null) ? Number(state.input) : 0),
                input: null 
            }
        case Actions.MULTIPLICATION:
            return {
                ...state,
                sum: Number(state.sum) * ((state.input !== null) ? Number(state.input) : 0),
                input: null 
            }
        case Actions.DIVISION:
            return {
                ...state,
                sum: Number(state.sum) / ((state.input !== null) ? Number(state.input) : 0),
                input: null 
            }
        case Actions.C:
            return {
                ...state,
                input: null 
            }
        case Actions.CC:
            return {
                ...state,
                sum: 0,
                input: null 
            }
        case Actions.APPEND_INPUT:
            return {
                ...state,
                input: (state.input !== null) ? (String(state.input).concat(action.input)) : action.input, 
            }
    
        default:
            return state;
    }
}