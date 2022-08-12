import axios from "axios"

export const getapi = async () => {
    const response = await axios.post("http://localhost:8000/quizdata")
    // const mainApi = response.data
    console.log(response)
    return response.data

    
}

// export function fetchApi (){

//     const response = axios.get("http://localhost:8000/quizdata")

//     return new Promise((resolve)=>
//         setTimeout(() => resolve( response.data ))
//     )
// }