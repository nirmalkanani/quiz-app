import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootred from "./redux/reducers/Main"
import reducer from ".//redux/Middleware/ApiSlice";
import api from "./redux/Middleware/Api";  

export const store = configureStore({
        reducer : rootred,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    })

    