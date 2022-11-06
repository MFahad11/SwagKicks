import React, {useEffect,useState} from 'react'
// import { storeToken } from '../../services/localStorage';
// import { useRegisterUserMutation,useLoginUserMutation,useSendResetEmailMutation } from '../../services/userAuthApi'
import { useDispatch,useSelector } from 'react-redux';
import Alert from '../alert/Alert'
import Loader from '../loader/Loader'
import {login,register} from '../../redux/action/userAction'
import { useNavigate } from "react-router-dom";
// import { useEffect } from 'react';
const LoginSignup = () => {
  const dispatch=useDispatch()
  
  const navigate=useNavigate()
  const{loading,error,userInfo}=useSelector(state=>state.userLogin)
  const{loading:load,error:errorR,userInfo:userInfoR}=useSelector(state=>state.userRegister)
  // const[registerUser]=useRegisterUserMutation();
  // const[loginUser]=useLoginUserMutation();
  // const[sendResetEmail]=useSendResetEmailMutation();
  useEffect(()=>{
    if(userInfo){
      // console.log(1)
      navigate('/')
    }
    else{
      // console.log(2)
    }
  },[userInfo,navigate,userInfoR,dispatch])
  const handleSignup=(e)=>{
    e.preventDefault()
    const data_obj=new FormData(e.currentTarget);
    const data={
      firstName:data_obj.get('firstName'),
      lastName:data_obj.get('lastName'),
      email:data_obj.get('email'),
      password:data_obj.get('password'),

    }
    // const response=await registerUser(data)
    // storeToken(response.data.token)
    dispatch(register(data.firstName,data.lastName,data.email,data.password))
    
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    const data_obj=new FormData(e.currentTarget);
    const data={
      email:data_obj.get('email'),
      password:data_obj.get('password')

    }
    dispatch(login(data.email,data.password))
    // const response=await loginUser(data)

    // storeToken(response.data.token)
  }
  const handleReset= async(e)=>{
    e.preventDefault()
    const data_obj=new FormData(e.currentTarget);
    const data={
      email:data_obj.get('email')
    }
    // const response=await sendResetEmail(data)
    // console.log(response)
  }
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" bis_skin_checked="1">
    <div className="carousel-inner " bis_skin_checked="1">
      <form className="carousel-item p-3" bis_skin_checked="1" onSubmit={handleSignup}>
        <p className='text-light fs-5 mb-3 fw-bold text-center'>Create Your Account</p>
      <div className="mb-3">
        <input type="text" id='fname' name='firstName' className="form-control" placeholder='First name' required/>
      </div>
      <div className="mb-3">
        <input type="text" id='lname' name='lastName' className="form-control" placeholder='Last name' required/>
      </div>
      <div className="mb-3">
        <input type="email" id='semail' name='email' className="form-control" placeholder='Email' required/>
      </div>
      <div className="mb-3">
        <input type="password" id='spassword' name='password' className="form-control" placeholder='Password' required/>
      </div>
      <button type="submit" className="btn mb-3 btn-warning text-light fw-bold w-100">Submit</button>
      <p className='text-center text-light'>Already have an account? <a href="#" className='text-decoration-none text-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">Sign in here</a></p>
    </form>
  <form className="carousel-item active p-3" bis_skin_checked="1" onSubmit={handleLogin}>
    <p className='text-light fs-5 mb-3 fw-bold text-center'>Login to your Account</p>
    <div className="mb-3">
      <input type="email" id='lemail' name='email' className="form-control" placeholder='Email' required/>
    </div>
    <div className="mb-3">
      <input type="password" id='lpassword' name='password' className="form-control" placeholder='Password' required/>
    </div>
    <button type="submit" className="btn btn-warning mb-3 text-light fw-bold w-100">Submit</button>
    <p className='text-light text-center m-0'>New customer? <a href="#" className='text-decoration-none text-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">Create your account</a></p>
    <p className='text-light text-center m-0'>Lost password? <a href="#" className='text-decoration-none text-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">Recover password</a></p>
  </form>
  <form className="carousel-item p-3" bis_skin_checked="1" onSubmit={handleReset}>
  <p className='text-light fs-5 mb-3 fw-bold text-center'>Reset Password</p>
  <div className="mb-3">
    <input type="email" id='remail' name='email' className="form-control" placeholder='Password' required/>
  </div>
  <button type="submit" className="btn btn-warning fw-bold text-light w-100 mb-3">Submit</button>
  <p className='text-light text-center'>Remembered your password? <a href="#" className='text-decoration-none text-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">Back to sign in</a></p>
</form>
    </div>
  </div>
  )
}

export default LoginSignup
