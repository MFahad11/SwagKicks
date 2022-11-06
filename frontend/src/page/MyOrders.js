import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import Alert from '../components/alert/Alert'
import Footer from '../components/footer/Footer'
import Loader from '../components/loader/Loader'
import NavBar from '../components/navbar/NavBar'
import { deleteOrders, listMyOrders } from '../redux/action/orderAction'
const MyOrders = () => {
    const {loading,orders,error}=useSelector(state=>state.orderListMy)
    const navigate=useNavigate()
    // console.log(orders)
    // console.log(cart)
    const dispatch=useDispatch()
    const currentTime=new Date().getMinutes()
    // const orderCreate=useSelector(state=>state.orderCreate)
    useEffect(()=>{
        dispatch(listMyOrders())
    },[dispatch])
    function cancelOrder(time,id){
      if(new Date().getMinutes()>=parseInt(time.split(":")[1])+10 || new Date().getHours()>=parseInt(time.split("T")[1]) || new Date().getDate()>new Date(time.split("T")[0]).getDate())
      {
        alert("Cannot Cancel!!!")
      }
      else{
        // console.log(new Date().getMinutes(),parseInt(time.split(":")[1])+10,new Date().getHours(),parseInt(time.split("T")[1]))
        dispatch(deleteOrders(id));
        window.location.reload()
      }
    }
  return (
    <>
    <NavBar/>
    <div className='w-50 mx-auto mt-5 mb-5'>
      {orders&&orders.length>0?<table class="pt-5 table  table-bordered">
  <thead style={{background:"#ffc107"}}>
    <tr className='text-light'>
    <th scope="col ">#</th>
      <th scope="col ">Order ID</th>
      <th scope="col">DATE</th>
      <th scope="col">TOTAL</th>
      <th scope="col">STATUS</th>
      <th scope='col'>ACTION</th>
    </tr>
  </thead>
  <tbody className='text-light'>
  {
    orders.map((order,index)=>{
        {/* console.log(new Date("2022-10-26")) */}
        return<>
        <tr>
        <th scope="row">{index+1}</th>
        <td><NavLink to={`/orderdetails/${order._id}`} className="text-decoration-none text-light">{order._id}</NavLink></td>
        <td>{order.createdAt.split("T")[0]}</td>
        {/* <td>{order.createdAt.split("T")[1].split(".")[0]}</td> */}

        <td>{order.totalPrice}</td>
        <td>{order.status}</td>
        {/* <td>{order.createdAt}</td> */}
        <td>{(order.status!=="Deleted")&&(order.status!=="Delivered")?<button className='btn btn-light text-warning' onClick={()=>{cancelOrder(order.createdAt,order._id)}}>Cancel</button>:<button className='btn'>No Action</button>}</td>
        </tr></>
        {/* onClick={()=>{new Date().getMinutes()>=parseInt(order.createdAt.split(":")[1])+10 && new Date().getHours>=parseInt(order.createdAt.split("T")[1])?alert("Cannot Cancel!!!"):dispatch(deleteOrders(order._id));window.location.href='/myOrders'} */}
    })
  }
  </tbody>
</table>:loading?<Loader/>:<Alert variant={"No Orders to show!"}/>}
    </div><Footer/></>
  )
}

export default MyOrders
