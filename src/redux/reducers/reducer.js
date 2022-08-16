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
                states: action.payload
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

        case "UPDATE_ANSWER":
            const newAnswers = state.answers.map((element) => element.questionID === action.payload.questionID ? action.payload : element)
            return {
                ...state,
                answers: newAnswers
            }
            default:
                return state
    }
}
