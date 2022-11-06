import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts,addProduct, deleteProduct } from "../../redux/action/productAction";
import Loader from "../../components/loader/Loader";
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faShoppingBag,
    faTruckFast,
    faSackDollar,
    faPen,
    faTrash,
    faDisplay,
    faPlus,
    faCheck

} from "@fortawesome/free-solid-svg-icons";
import Alert from "../../components/alert/Alert";
import { deleteOrders, deliverOrders, getAllOrders, getAllPendingOrders } from "../../redux/action/orderAction";
import Orders from "../../components/admin/Orders.js";

const ShowAllOrders = () => {
    const dispatch = useDispatch();
    // const { loading, error, orders} = useSelector(
    //   (state) => state.allOrders
    // );
    
    
  //   const {load,err,success}=useSelector((state)=>state.addProduct)
    // console.log(products)
    // useEffect(() => {
    //   dispatch(getAllOrders());
    // }, [dispatch]);
    // const handleSubmit=(e)=>{
    //   e.preventDefault()
    //   const data_obj=new FormData(e.currentTarget);
    //   const data={
    //     name:data_obj.get('name'),
    //     gridImage:data_obj.get('gridImage'),
    //     mainImage:data_obj.get('mainImage'),
    //     brand:data_obj.get('brand'),
    //     color:data_obj.get('color'),
    //     stock:data_obj.get('stock'),
    //     price:data_obj.get('price'),
    //   }
    //   dispatch(addProduct(data))
    //   // console.log("dispatch")
    // }
    return (<>
      
  <Orders pages="All Orders"/></>);
}

export default ShowAllOrders
