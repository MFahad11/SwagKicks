import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
// import { useHistory } from "react-router-dom";
// import { HistoryRouterProps } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails } from "../../redux/action/productAction";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";
// import pic from "../homegrid/1.jpg";
// import axios from "axios";
import React, { useEffect, useState } from 'react'
// import data from '../../data.json'
import { useParams } from "react-router-dom";
const Product= () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id}=useParams()
    const [size,setSize]=useState("")
    const{loading,error,product}=useSelector(state=>state.productDetails)
    // const product=data.sneakers.find((item)=>{
    //     return item.id===parseInt(id)
    // })
    // useEffect(()=>{
    //     console.log()
    // },[])
    // const [product,setProduct]=useState({})
    useEffect(()=>{
    //   const fetchProducts=async()=>{
    //     const {data}=await axios.get(`http://localhost:8000/api/product/${id}`)
    //     // console.log(6446656);
    //     setProduct(data)
    //   }
    dispatch(listProductDetails(id))
    //   fetchProducts()
    //   console.log(8789789)
    },[dispatch])
//     const [img,setImg]=useState(product.grid_picture_url)
//  (e)=>{
//         console.log(e.target.src)
//         setImg(e.target.src)
//    }
//     document.addEventListener("DOMContentLoaded", function(event) {
//         console.log(product)
//    });
const addToCart=()=>{
    if(size.length>=1){
   navigate(`/cart/${id}/${size}`)}
   else{
    alert("Select size please!!")
   }}
  return (
<div className="container mt-5 mb-5" >
    {/* {[1,2].map(()=>{console.log(product)})} */}
    <div className="row d-flex justify-content-center" >
        <div className="col-md-10" >
            <div className="card text-light" style={{background: "#151515"}}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={product.mainImage} width="250" /></div>
                            <div className="thumbnail text-center"> <img src={product.gridImage} width="70"/><img src={product.gridImage} width="70"/></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4 text-end">
                            <Link to='/' className=" me-auto text-decoration-none text-light"><FontAwesomeIcon icon={faArrowLeft}/> <span className="ms-1">Back</span></Link>
                            <div className="mt-4 mb-3 text-start fs-6">
                                <h5 className="text-uppercase fs-3">{product.name}</h5>
                                <p className="fs-4 text-warning">{product.price} Rs</p>
                            </div>
                            <ul className="list-group text-start p-0">
                                <li className="list-group-item border-0 ps-0 text-light fw-bold"  style={{background: "#151515"}}>Brand Name: <span className="text-warning">{product.brand}</span></li>
                                <li className="list-group-item border-0 ps-0 text-light fw-bold"  style={{background: "#151515"}}>Color: <span style={{color:`${product.color}`}}>{product.color}</span></li>
                                <li className="list-group-item border-0 ps-0 text-light fw-bold"  style={{background: "#151515"}}>Release Year: <span className="text-warning">{product.release_year}</span></li>
                                <li className="list-group-item border-0 ps-0 text-light fw-bold"  style={{background: "#151515"}}>Stock Available: <span className={(product.stock)?"text-warning":"text-danger"}>{(product.stock)?product.stock:"Out of Stock"}</span></li>
                                {/* <li className="list-group-item">Keywords: {product.}</li> */}
                            </ul>
                            <div className="mt-4 text-start">
                                <h6 className="text-uppercase">Size</h6>
                                {loading?<Loader/>:error?<Alert variant={error}/>:[6,7,8,9,10].map((elem)=>{
                                    return<><div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="size" id={elem} value={elem} onClick={(e)=>{setSize(e.currentTarget.value)}}/>
                                    <label className="form-check-label" htmlhtmlFor={elem}>{elem}</label>
                                </div></>
                                })}
                            </div>
                            <button className="btn btn-warning text-light text-start text-uppercase mr-2 px-4" onClick={addToCart}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Product