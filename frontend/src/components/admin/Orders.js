import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faCheck

} from "@fortawesome/free-solid-svg-icons";
import { deleteOrders, deliverOrders, getAllOrders, getAllPendingOrders} from "../../redux/action/orderAction";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";
const Orders = ({pages}) => {
    const dispatch = useDispatch();
    
      const { loading, error, orders} = useSelector(
        (state) => {
          if(pages==="All Orders"){
          return state.allOrders
        }
          else{
            return state.pendingOrders
          }
        }
      );
    
    useEffect(() => {
      if(pages==="All Orders"){dispatch(getAllOrders());}
      else{dispatch(getAllPendingOrders());}
    }, [dispatch,orders]);
  return (
    <>
    {loading?<Loader/>:error?<Alert/>:orders?<div class="content-2">
    <div class="recent-payments">
      <div class="title">
        {/* <h2>Orders</h2><button className="fs-6 ms-auto btn" onClick={()=>{setDisplay(!display);console.log(display)}}>New <FontAwesomeIcon icon={faPlus}/> </button> */}
        <h2>{pages}</h2>
      </div>
      <table class="table border">
        <thead style={{backgroundColor:"#151515"}}>
          <tr className="text-light">
            <th scope="col">#</th>
            <th scope="col">Order Id</th>
            <th scope="col">Ordered date</th>
            <th scope="col">Product Count</th>
            <th scope="col">City</th>
            <th scope="col">Total Price</th>
            <th scope="col">Status</th>
            {pages!=="All Orders"?<th scope="col">Actions</th>:""}
          </tr>
        </thead>
        <tbody>
        {orders.map(({orderId,createdAt,city,Products,totalPrice,status},index)=>{
          return <><tr>
            <th scope="row">{index+1}</th>
            <td><NavLink to={`/admin/orderdetail/${orderId}`} className="text-decoration-none text-primary">{orderId}</NavLink></td>
            <td>{createdAt.substring(0,10)}</td>
            <td>{Products}</td>
            <td >{city}</td>
            <td>{totalPrice} Rs.</td>
            <td className={`${status==="Pending"?"text-primary":status==="Delivered"?"text-success":"text-danger"}`}>{status}</td>
            {pages!=="All Orders"?<td><NavLink className="btn" onClick={()=>{dispatch(deliverOrders(orderId))}}><FontAwesomeIcon icon={faCheck}/></NavLink><NavLink className="btn" onClick={()=>{dispatch(deleteOrders(orderId))}}><FontAwesomeIcon icon={faTrash}/></NavLink></td>:""}
          </tr></>})}
        </tbody>
      </table>
    </div>
  </div>:""}</>
  )
}

export default Orders
