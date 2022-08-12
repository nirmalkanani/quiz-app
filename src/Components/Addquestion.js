import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SENDDATA } from '../redux/action/action'
import './style.css'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useImperativeHandle } from 'react';



const Addquestion = () => {

  const InitialData = {
    question: "",
    options: [],
    answerkey: ""
  }

  const [data, setData] = useState(InitialData)

  const { question } = data

  const [op1, setOp1] = useState({
    id: "",
    optionValue: ""
  })
  const [op2, setOp2] = useState({
    id: "",
    optionValue: ""
  })
  const [op3, setOp3] = useState({
    id: "",
    optionValue: ""
  })
  const [op4, setOp4] = useState({
    id: "",
    optionValue: ""
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleChangeOp1 = (e) => {
    setOp1({ ...op1, id: uuidv4(), [e.target.name]: e.target.value })
  }

  const handleChangeOp2 = (e) => {
    setOp2({ ...op2, id: uuidv4(), [e.target.name]: e.target.value })
  }

  const handleChangeOp3 = (e) => {
    setOp3({ ...op3, id: uuidv4(), [e.target.name]: e.target.value })
  }

  const handleChangeOp4 = (e) => {
    setOp4({ ...op4, id: uuidv4(), [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()

  const sendQueData = (e) => {

    const checkQue = question
    e.preventDefault()
    
    if (!checkQue) {
      toast.error("data")
    } else {
      data.options.push(op1, op2, op3, op4)
      dispatch(SENDDATA(data))
      toast.success("Your Question Add Successfully")
      navigate("/add-question")
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form className='text-center my-5' onSubmit={(e) => sendQueData(e)}>
            <div className="input-area my-3">
              <input type="text" name='question' id='question' placeholder='Enter Your Question Here' autoComplete='off' value={question} onChange={(e) => handleChange(e)} />
            </div>
            <div className="optiondata my-3 ">
              <div className="d-inline-block">
                <input type="radio" name='answerkey' value={op1.id} onChange={(e) => handleChange(e)} /></div>
              <div className="d-inline-block">
                <input type="text" name='optionValue' id='optionValue' placeholder='Option 1' autoComplete='off' value={op1.optionValue} onChange={(e) => handleChangeOp1(e)} /></div>
            </div>
            <div className="optiondata my-3">
              <div className="d-inline-block">
                <input type="radio" name='answerkey' value={op2.id} onChange={(e) => handleChange(e)} /></div>
              <div className="d-inline-block">
                <input type="text" name='optionValue' id='optionValue' placeholder='Option 2' autoComplete='off' value={op2.optionValue} onChange={(e) => handleChangeOp2(e)} /></div>
            </div>
            <div className="optiondata my-3">
              <div className="d-inline-block">
                <input type="radio" name='answerkey' value={op3.id} onChange={(e) => handleChange(e)} /></div>
              <div className="d-inline-block">
                <input type="text" name='optionValue' id='optionValue' placeholder='Option 3' autoComplete='off' value={op3.optionValue} onChange={(e) => handleChangeOp3(e)} /></div>
            </div>
            <div className="optiondata my-3">
              <div className="d-inline-block">
                <input type="radio" name='answerkey' value={op4.id} onChange={(e) => handleChange(e)} /></div>
              <div className="d-inline-block">
                <input type="text" name='optionValue' id='optionValue' placeholder='Option 4' autoComplete='off' value={op4.optionValue} onChange={(e) => handleChangeOp4(e)} /></div>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addquestion