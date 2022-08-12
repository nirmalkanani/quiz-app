import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './component.css'
import { ANSWERKEY } from '../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Examination = () => {

  // const getdata = useSelector((state) => state.answerReducer.answers)

  const [count, setCount] = useState(0)

  const [queData, setQueData] = useState()

  const [ checkValue, setCheckValue ] = useState()

  const initialAns = {
    answerValue: ""
  }

  const [answerData, setAnswerData] = useState(initialAns)

  const navigate = useNavigate()

  const getData = async () => {
    const data = await axios.get("http://localhost:8000/quizdata")
    if (data.status == 200) {
      setQueData(data.data)
    } else {
      console.log("Error")
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const handleChange = (e) => {
    setAnswerData({ ...answerData, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()

  const next = () => {
    setCount(count + 1)
    dispatch(ANSWERKEY(answerData))

    if (count < queData.length - 1) {
      setCount(count + 1)
    } else {
      navigate('/result')
    }
  }

  const previous = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          {queData == undefined ? console.log("Error") :
            <div className='col-12'>
              <div className="question-show">
                <h3 className='text-dark border border-2 border-dark rounded py-3 fw-bold ps-3 w-50'>{count + 1}) {queData[count].question}</h3>
                <div className="options-show my-2">
                  {
                    queData[count].options.map((element, index) =>
                      <label className="check-lable d-block w-25 rounded" key={index}>
                        <div className="check-lable-sub">
                          <input type="radio" id="answerValue" name='answerValue' checked={element.id == answerData.answerValue? true : false} value={element.id} onChange={(e) => handleChange(e)} />
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
          <button type="click" className='btn btn-dark me-4 py-2 px-3' onClick={previous}> Previous </button>
          <button type="click" className='btn btn-dark me-4 py-2 px-3' onClick={next}> Save & Next</button>
        </div>
      </div>
    </>
  )
}

export default Examination
