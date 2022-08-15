const INITIAL_STATE = {
    states: []
}

const INITIAL_ANSWER_STATE = {
    answers: []
}

export const stateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_USERDATA":
            return {
                ...state,
                states: [...state.states, action.payload]
            }
            default:
                return state
    }

}

export const answerReducer = (state = INITIAL_ANSWER_STATE, action) => {
    switch (action.type) {
        case "ADD_ANSWERKEY":
            return {
                ...state,
                answers: [...state.answers, action.payload]
            }
            default:
                return state
    }
}