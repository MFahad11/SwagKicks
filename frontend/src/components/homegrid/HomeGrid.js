import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { listProducts } from "../../redux/action/productAction";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";
// import icon from './1.jpg'
// import axios from 'axios'
// import data from '../../data.json'
const HomeGrid = () => {
  // const [userData,setUserData]=useState([])
  const dispatch=useDispatch()
  const {loading,error,products}=useSelector(state=>state.productList)
  useEffect(()=>{
    // const fetchProducts=async()=>{
    //   const {data}=await axios.get('http://localhost:8000/api/product')
    //   setUserData(data.sneakers)
    // }
    // fetchProducts()
    dispatch(listProducts())
    // console.log(productList)

  },[dispatch])
  // const userData=[]
  // console.log(data.sneakers)
  return (
    <>
    {loading?<Loader/>:error?<Alert variant={error}/>:<div className="container pt-5 text-light">
      <div className="row">
        <div className='col-8 mb-3 fs-3 fw-bold'>
            WHAT'S HOT!
        </div>
        <div className='col-4 text-end text-warning mb-1'>
            View All
        </div>
        {products.slice(0,7).map(({name,color,gridImage,price,_id})=>{
          {/* console.log(userData) */}
          return <div className="col-12 col-lg-4 border border-secondary p-3 col-md-6" style={{background: "#151515"}}>
          <div className="d-flex align-items-center p-2">
            <div className="flex-shrink-0">
              <img src={gridImage} width={130} height={110} alt="..." />
            </div>
            <div className="flex-grow-1 ms-3 ">
                <Link to={`/product/${_id}`} className="fw-bold text-decoration-none text-light">{name}<br/><span className="text-warning">{price} Rs</span></Link>
            </div>
          </div>
        </div>
        })}
        </div>
      </div>}</>
  );
};
export default HomeGrid;
