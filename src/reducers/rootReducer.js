import * as ActionTypes from '../constants/actionTypes'

const initialState = {
    sum: 0,
    input: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADDITION:
            return {
                ...state,
                sum: Number(state.sum) + ((state.input !== null) ? Number(state.input) : 0),
                input: null 
            }
        case ActionTypes.SUBTRACTION:
            return {
                ...state,
                sum: Number(state.sum) - ((state.input !== null) ? Number(state.input) : 0),
                input: null 
            }
        case ActionTypes.MULTIPLICATION:
            return {
                ...state,
                sum: Number(state.sum) * ((state.input !== null) ? Number(state.input) : 0),
                input: null 
            }
        case ActionTypes.DIVISION:
            return {
                ...state,
                sum: Number(state.sum) / ((state.input !== null) ? Number(state.input) : 0),
                input: null 
            }
        case ActionTypes.C:
            return {
                ...state,
                input: null 
            }
        case ActionTypes.CC:
            return {
                ...state,
                sum: 0,
                input: null 
            }
        case ActionTypes.APPEND_INPUT:
            return {
                ...state,
                input: (state.input !== null) ? (String(state.input).concat(action.input)) : action.input, 
            }
    
        default:
            return state;
    }
}