import React, { useEffect, useState } from "react";
import pic from "../homegrid/1.jpg";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { listProducts } from "../../redux/action/productAction";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";
// import data from '../../data.json'
const ProductGrid = ({page}) => {
  const [userData,setUserData]=useState([])
  const dispatch=useDispatch()
  let min,max
  const {loading,error,products}=useSelector(state=>state.productList)
  if(products && products.length>=1){

    if(page==="New Arrivals"){
      min=0;
      max=Math.floor(products.length/2)

    }
    else{
      max=products.length
      min=Math.floor(products.length/2)
    }
  }
  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  return (
    <>
      {loading?<Loader/>:error?<Alert variant={error}/>:<div className="row row-cols-4 m-0 p-0 w-100">
        <div className="col-12 m-0 p-2 border border-dark text-start text-light fs-3 p-3 fw-bold">
          {
            page
          }
        </div>
        {products.slice(min,max).map(({name,color,gridImage,price,_id}) => {
          return (
            <div className="col p-2 border border-dark text-light">
              <div className="card border-0" style={{ background: "#151515" }}>
                <img
                  src={gridImage}
                  className="card-img-top mt-3 mx-auto w-75"
                  alt="..."
                />
                <div className="card-body text-start mt-4">
                  <p className="card-text">
                    {name}
                  </p>
                  <p className="card-text text-warning">{price}Rs.</p>
                  <Link
                    to={`/product/${_id}`}
                    className="btn w-100 text-light"
                    style={{ background: "#ffc230" }}
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>}
    </>
  );
};

export default ProductGrid;
