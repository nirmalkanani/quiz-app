import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './component.css'
import { ANSWERKEY, UPDATEANSWER } from '../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Examination = () => {

  const [value, setValue] = useState(false)

  const [count, setCount] = useState()

  const dispatch = useDispatch()

  const [queData, setQueData] = useState()

  const initialAns = {
    questionID: "",
    answerValue: ""
  }
  // const getReduxData = useSelector((state) => state.answerReducer.answers)

  const [answerData, setAnswerData] = useState(initialAns)

  const getReduxData = useSelector((state) => state.answerReducer.answers)

  const navigate = useNavigate()

  const getData = async () => {
    const data = await axios.get("http://localhost:8000/quizdata")
    if (data.status == 200) {
      const dataAll = data.data

      const arr = getRandomArr(dataAll)
      const Newarr = arr.map((element) => {
        const newdata = getRandomArr(element.options)
        element.options = newdata
        return element
      })
      setQueData(Newarr)
      setCount(0)
    } else {
      console.log("Error")
    }
  }

  const getRandomArr = (data) => {

    const blank = []

    const Index = []

    for (let i = 0; i < data.length; i++) {
      const GetRandom = getRandomIndex(data.length, Index)
      const random = data[GetRandom]
      Index.push(GetRandom)
      blank.push(random)
    }
    return blank
  }

  const getRandomIndex = (length, arr) => {
    const Unique = Math.floor(Math.random() * length)
    if (arr.includes(Unique)) {
      return getRandomIndex(length, arr)
    } else {
      return Unique
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const handleChange = (e) => {
    setAnswerData({ questionID: queData[count].questionID, [e.target.name]: e.target.value })
  }

  const next = () => {

    const QUESTIONS_ID = getReduxData.find((data) => data.questionID === answerData.questionID)
    const ANSWERS_ID = getReduxData.find((data) => data.answerValue === answerData.answerValue)
    
    if (QUESTIONS_ID) {
      counter_action()
      if (ANSWERS_ID) {
      } else {
        dispatch(UPDATEANSWER(answerData))
      }
    } else if (!answerData.answerValue) {
      console.log({count, queData})
      
      dispatch(ANSWERKEY({...answerData, questionID: queData[count].questionID , answerValue:""} ))
      counter_action()
      toast.success("Answer Add Successfully")
    } else {
      dispatch(ANSWERKEY(answerData))
      counter_action()
    }
  }

  const counter_action = () => {
    if (count < queData.length - 1) {
      setValue(true)
      setCount(count + 1)
    } else {
      navigate('/result')
    }
  }

  const previous = () => {
    dispatch(UPDATEANSWER(answerData))
    if (count == 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    previous_action()
  }, [count])

  const previous_action = () => {

    const QUESTION_ID = queData == undefined ? "" : queData[count]?.questionID

    const ANSWERS_ID = getReduxData.find((data) => data.questionID === QUESTION_ID)
    if(ANSWERS_ID){
      setAnswerData(ANSWERS_ID)
    }else{
      setAnswerData({ questionID: QUESTION_ID, answerValue: "" })
    }
    
  }

  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          {queData == undefined ? "" :
            <div className='col-12 col-md-8'>
              <div className="question-show">
                <h3 className='text-dark border border-2 border-dark rounded py-3 fw-bold ps-3 w-auto'>{count + 1}) {queData[count].question}</h3>
                <div className="options-show my-2">
                  {
                    queData[count].options.map((element, index) =>
                      <label className="check-lable d-block rounded col-12 col-md-8" key={index}>
                        <div className="check-lable-sub">
                          <input type="radio" id="answerValue" name='answerValue' checked={element.id === answerData?.answerValue ? true : false} value={element.id} onChange={(e) => handleChange(e)} />
                          <div className="lable-border">
                            <div className="lable-text">{element.optionValue}</div>
                          </div>
                        </div>
                      </label>
                    )
                  }
                </div>
              </div>
            </div>
          }
        </div>
        <div className="btn-groups">
          {value ? <button type="click" className='btn btn-dark me-4 py-2 px-3' onClick={previous}> Previous </button> : ""}
          <button type="click" className='btn btn-dark me-4 py-2 px-3' onClick={next}> Save & Next</button>
        </div>
      </div>
    </>
  )
}

export default Examination;
