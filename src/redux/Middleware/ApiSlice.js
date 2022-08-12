import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./ApiAction";



const slice = createSlice({
    name : "data",
    initialState : {
        list:[],
        loading: false
    },

    reducers:{
        datasRequested : (datas, action)=> {
            datas.loading = true
        },

        datasReceived : (datas, action) => {
            datas.list = action.payload;
            datas.loading = false
        },

        datasRequestFailed : (datas, action) => {
            datas.loading = false
        }
    }
})

export default slice.reducer

const {datasRequested, datasReceived, datasRequestFailed} = slice.actions

const url = "/quizdata"

export const loaddata = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: datasRequested.type,
            onSuccess: datasReceived.type,
            onError:datasRequestFailed.type
        })
    )
}
