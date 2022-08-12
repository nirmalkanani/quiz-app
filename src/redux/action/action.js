

export const ADDUSER = (item) => {
    return{
        type:"ADD_USERDATA",
        payload:item
    }
}

export const SENDDATA = (item) => {
    return{
        type:"ADD_QUESTIONDATA",
        data:item,
        isHttpsAction : true,
        method:'POST',
        url:'/quizdata'
    }
}

export const ANSWERKEY = (item) => {
    return{
        type:"ADD_ANSWERKEY",
        payload:item
    }
}

 