import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Result = () => {

  const [userAns, setUserAns] = useState([])

  const [defAns, setDefAns] = useState([])

  const [score, setScore] = useState(0)

  const getData = useSelector((state) => state.answerReducer.answers)

  const data = async () => {
    const getDefaultData = await axios.get('http://localhost:8000/quizdata')
    setDefAns(getDefaultData.data)
  }

  useEffect(() => {
    setUserAns(getData);
    data();
    for(let i = 0; i < defAns.length; i++) {
      // if(defAns[i].answerkey === userAns[i].answerValue){
      //   console.log(i)
      // }
      const findData = defAns.find((e,i) => e[i].answerkey === userAns[i].answerValue)
      console.log(findData)
      {
        defAns[i].answerkey === userAns[i].answerValue ?  setScore(score + 1) : console.log("Error") 
      }
    }
  }, [])

  return (

    <div className='container'>
      <div className="row my-5">
        <div className="col-12">
          <h3 className='text-center'>YOUR FINAL SCORE IS</h3>
          <h1 className='text-center fs-1 text-red'>{score}</h1>
        </div>
      </div>
    </div>

  )
}

export default Result
