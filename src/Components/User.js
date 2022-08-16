import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ADDUSER } from '../redux/action/action'
import './style.css'



const User = () => {

  const InitialState = {
    id: "",
    username: ""
  }

  const getReduxUser = useSelector((state) => state.stateReducer.states)

  const [ reduxUser, setReduxUser ] = useState(getReduxUser)

  const navigate = useNavigate()

  const [data, setData] = useState(getReduxUser)

  const { username } = data

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({[name] : value })
  }

  const RandomID = Math.random() * (100 - 1) + 1;
  const IntID = parseInt(RandomID)

  const handleSubmit = (e) => {

    if(!username){
      e.preventDefault()
      return toast.error("Enter UserName")
    }else{
      dispatch(ADDUSER({ ...data, id: IntID }))
    toast.success("Now, You are able to add question")
    navigate('/add-question')
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <form action="#" method='post' className='text-center my-5' onSubmit={(e) => handleSubmit(e)}>
            <div className="input-area my-3">
              <input type="text" name='username' id='username' value={username} placeholder="Enter Your Name" onChange={(e) => handleChange(e)} />
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
