import React, { useEffect, useState } from "react";
import logo from "./logo.jpg";
// import { removeToken } from "../../services/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import Modal from "../modal/Modal";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { getToken } from "../../services/localStorage";
// import { useGetUserDataQuery } from "../../services/userAuthApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/userAction";
// import { setUserInfo } from "../../features/userSlice";
const NavBar = () => {
  const navigate=useNavigate()
  const dispatch =useDispatch()
  const{userInfo}=useSelector(state=>state.userLogin);

  // const{userInfo}=useSelector(state=>state.userLogin)
  // const{userInfoR}=useSelector(state=>state.userRegister)
  // console.log(userInfoR,"1")
  // console.log(userInfoR,"2")
  
  // console.log(useSelector(state=>state.userLogin))
  // const launchModal=(e)=>{
  //   console.log(1);
  //   <Modal condition={e.target.innerText}/>
  // }
  // const token=getToken("token")
  // const {data,isSuccess}=useGetUserDataQuery(token)
  // const dispatch=useDispatch()
  // const {loading,error,products}=useSelector(state=>state.productList)
  // useEffect(()=>{
  //   if(data && isSuccess){
  //     dispatch(setUserInfo({
  //       name:`${data.User.firstName}${data.User.lastName}`
  //     }))
  //   }
  // },[dispatch,isSuccess,data])
  // const user_data=useSelector(state=>state.user)
  // console.log(user_data.name)
  // console.log(data.User.email)
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-dark sticky-top ">
        <div className="container-fluid">
          <NavLink
          to='/'
            className="navbar-brand d-flex align-items-center mb-0 h1 text-light"
          >
            <div className="flex-shrink-0">
              <img
                src={logo}
                width="60"
                height="54"
                className="d-inline-block align-text-top"
              />
            </div>
            <span className=" flex-grow-1">SwagKicks</span>
          </NavLink>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-secondary"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-warning fw-bold"
                id="offcanvasNavbarLabel"
              >
                SwagKicks
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-light" to='/' >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-light" to='/new_arrivals' style={({isActive})=>{return {backgroundColor:isActive?"rgb(255, 193, 7,0.2)":""}}}>
                    New Arrivals
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-light" to='/most_wanted' style={({isActive})=>{return {backgroundColor:isActive?"rgb(255, 193, 7,0.2)":""}}}>
                    Most Wanted
                  </NavLink>
                </li>
                {!userInfo?<li className="nav-item mx-2">
                  <NavLink className="nav-link text-light" to='/myOrders' style={({isActive})=>{return {backgroundColor:isActive?"rgb(255, 193, 7,0.2)":""}}}>
                    My Orders
                  </NavLink>
                </li>:userInfo && userInfo.data.role==="admin"?"":<li className="nav-item mx-2">
                  <NavLink className="nav-link text-light" to='/myOrders' style={({isActive})=>{return {backgroundColor:isActive?"rgb(255, 193, 7,0.2)":""}}}>
                    My Orders
                  </NavLink>
                </li>}</ul>
              <button
                type="button"
                className="btn btn-warning me-5 text-light fw-bold mb-5 mb-lg-0"
                data-bs-toggle="modal"
                data-bs-target="#search"
              >
                Search
              </button>
              <Modal id="search"/>
              <div className="d-flex flex-row justify-content-evenly me-lg-3 align-items-center">
              {!(userInfo)?<div className="">
                <FontAwesomeIcon
                    icon={faUser}
                    className="text-light fs-4 flex-shrink-0"
                  />
                  <a
                    href="#"
                    className="flex-grow-1 text-decoration-none text-light mx-1 fs-6 fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#loginsignup"
                  >
                    Account
                  </a>
                  <Modal id="loginsignup"/>
                </div>:<div class="btn-group">
  <button type="button" class="btn btn-warning text-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    {userInfo.data.firstName}
  </button>
  <ul class="dropdown-menu bg-light border border-warning profile-dropdown">
    <li><Link to={userInfo.data.role==="user"?"/profile":"/admin"} class="dropdown-item  border-0 border-bottom" href="#">{userInfo.data.role==="user"?"Profile":"Dashboard"}</Link></li>
    <li><a class="dropdown-item " href="#" onClick={()=>{dispatch(logout());navigate('/')}}>Logout</a></li>
  </ul>
</div>}
                <div
                  className="vr text-warning bg-warning mx-4"
                  style={{ width: "2px" }}
                ></div>
                <div className="me-5">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-light flex-shrink-0 fs-4"
                  />
                  <Link
                    to={userInfo && userInfo.data.role==="admin"?"/":"/cart"}
                    
                    className="flex-grow-1 text-light fs-6 text-decoration-none fw-bold ms-1 disabled"
                  >
                    Cart
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
      </nav>
    </>
  );
};
export default NavBar;
