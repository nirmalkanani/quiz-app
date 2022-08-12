import axios from "axios";
import * as actions from './ApiAction'


const api = ({ dispatch }) => (next) => async (action) => {


    

    const {
        url,
        method,
        data,
        onStart,
        onSuccess,
        onError,
        isHttpsAction
    } = action

    // console.log(action)

    if (!isHttpsAction) return next(action)

    if (onStart) dispatch({
        type: onStart
    });

    next(action);


        try {
            const response = await axios.request({
                baseURL: "http://localhost:8000",
                url,
                method,
                data
            });

            dispatch(actions.apiCallSuccess(response.data))

            if (onSuccess) dispatch({
                type: onSuccess,
                payload: response.data
            })

        } catch (error) {
            dispatch(actions.apiCallFailed(error.message));

            if (onError) dispatch({
                type: onError,
                payload: error.message
            })
        }
}

export default api