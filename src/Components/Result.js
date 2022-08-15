import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Result = () => {

  const [ score, setScore ] = useState(0)

  const getUserData = useSelector((state) => state.answerReducer.answers)

  const [ userData, setUserData ] = useState(getUserData)

  const [ total, setTotal ] = useState(0)

  const data = async () => {
    const data = await axios.get('http://localhost:8000/quizdata')
    if(data.status == 200){
      const defAns = data.data
      setTotal(defAns.length)
      const a = []
      const D = defAns.filter((element) => element.id === userData.id)
      console.log(D)
      for (let i = 0; i < defAns.length; i++) {
        const mainID = defAns[i].questionID
        console.log(mainID, "Question")

        const answer = userData[i].questionID
        console.log(answer, "Answer")

        if(defAns[i].answerkey === userData[i].answerValue){
          a.push(i)
        }

      }
      console.log(a)
      setScore(a.length)
      console.log(userData)
    }else(
      console.log("Not Set")
    )
  }

  useEffect(() => {
    (async ()=> {
     await data();
    })()
  },[])

  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-12">
          <h3 className='text-center'>YOUR FINAL SCORE IS</h3>
          <h1 className='text-center fs-1 text-red'>{score} / {total}</h1>
        </div>
      </div>
    </div>
  )
}

export default Result
