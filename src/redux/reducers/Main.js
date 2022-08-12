import { combineReducers } from "redux";
import {  stateReducer, answerReducer } from "./reducer";

// Combine All Reducer In One 

const rootred = combineReducers({
    stateReducer,
    answerReducer 
})

export default rootred