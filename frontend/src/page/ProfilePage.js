import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getUserDetails } from '../redux/action/userAction';
import Loader from '../components/loader/Loader';
import Alert from '../components/alert/Alert';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
const ProfilePage = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {loading,error,user}=useSelector(state=>state.userDetails)
    const {userInfo}=useSelector((state)=>state.userLogin)
    useEffect(()=>{
        if(!userInfo){
            navigate('/home')
        }
        else{
            if(user){
                dispatch(getUserDetails())
                
            }else{
                
            }
        }
    },[])
  return (
    <>
    <NavBar/>
      <div className='container w-50 mt-5'>
      <h2 className='text-light mb-3'>Profile</h2>
      <div class="row g-3">
  <div class="col-md-7">
    <input type="text" class="form-control" value={user.FirstName} readOnly placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col-md-7">
    <input type="text" class="form-control" value={user.LastName} readOnly placeholder="Last name" aria-label="Last name"/>
  </div>
  <div class="col-md-7">
    <input type="email" class="form-control" value={user.Email} readOnly id="inputEmail4" placeholder="Email"/>
  </div>
    <div class="col-md-7">
    <input type="text" class="form-control" value={user.Number} readOnly id="inputNumber" placeholder="Phone"/>
  </div>
  <div class="col-md-9">
    <input type="text" class="form-control" value={user.Address} readOnly id="inputAddress" placeholder="Address....."/>
  </div>
  <div class="col-md-3">
    <input type="text" class="form-control" id="inputCity" value={user.City} readOnly placeholder="City"/>
  </div>
    </div></div><Footer/></>
  )
}

export default ProfilePage
