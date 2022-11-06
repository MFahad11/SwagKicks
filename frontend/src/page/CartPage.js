import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/action/cartAction'
import { Link } from 'react-router-dom'
import { useParams,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus,faTrash } from '@fortawesome/free-solid-svg-icons'
import pic from '../components/homegrid/1.jpg'
import Alert from '../components/alert/Alert'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
const CartPage = () => {
  const {id,size}=useParams()
  // console.log(location.search) 
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // const {loading,error,user}=useSelector(state=>state.userDetails)
  const {userInfo}=useSelector((state)=>state.userLogin)
  const [qty,setQty]=useState(1)
  let expression='';
  let total=0;
  
  useEffect(()=>{
    if(id){
      dispatch(addToCart(id,size,qty))
    }
    else if(!userInfo){
      // alert("Please Login first!!!")
    }
  },[dispatch,id,qty])
  const {cartItems}=useSelector(state=>state.cart)
  // console.log(cartItems.length)
  return (
    <>
    <NavBar/>
    {cartItems.length===0?
      <Alert variant={["Your Cart is Empty! ",<Link to='/'>Go Back</Link>]}/>:
     <section className="h-100 text-light" >
        <div className="container ">
            <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8" >
                    <div className="card mb-4" style={{ background: "#151515" }}>
                        <div className="card-header py-3">
                            <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                        </div>
                    <div className="card-body">
                        {cartItems.map((item)=>{
                          expression=`${expression}+(${item.price}*${item.qty})`
                          {total=eval(expression)}
                          {/* console.log(cartItems.length) */}
                            return <>
                            <div className="row">
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                    <img src={item.image}
                                    className="w-100"  />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                <p><strong>{item.name}</strong></p>
                                <p>Color: {item.color}</p>
                                <p>Size: {item.size}</p>
                                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                title="Remove item" onClick={()=>{dispatch(removeFromCart(item.product))}}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 " >

                                <div className="mb-4 d-flex" style={{maxWidth: "300px"}}>
                                    <button type='button' className='btn btn-warning text-light' onClick={(e)=>{
                                      let value=document.getElementById(item.product).value;
                                      if(value>1){
                                        value=value-1;
                                        dispatch(addToCart(item.product,size,value))
                                        }
                                      else{}}}>
                                        <FontAwesomeIcon icon={faMinus}/>
                                    </button>
                                    <input type="text" id={item.product} className='mx-1 form-control w-25 text-center fw-bold' value={item.qty}/>
                                    {/* <span className='bg-light mx-2 text-dark p-1 fs-4 fw-bold'>3</span> */}
                                    <button type='button' className='btn btn-warning text-light' onClick={(e)=>{
                                      let value=parseInt(document.getElementById(item.product).value);
                                      if(value<item.stock){
                                        value=value+1;
                                        dispatch(addToCart(item.product,size,value))
                                        }
                                      else{}}}>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </button>
                                </div>
                                <p className="text-start text-md-center text-light">
                                    <strong>{item.price} Rs.</strong>
                                </p>
                            </div>
                        </div>
                        <hr className="my-4" />
                            </>}
                        )}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4" style={{ background: "#151515" }}>
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body" >
            <ul className="list-group list-group-flush" >
              <li
                className="list-group-item text-light d-flex justify-content-between align-items-center border-0 px-0 pb-0" style={{ background: "#151515" }}>
                Total Products
                <span className="text-warning me-4">{cartItems.length}</span>
              </li>
              <li className="list-group-item text-light  px-0 border-0 " style={{ background: "#151515" }}>
                {/* Sub-Total
                <span>{expression} <span className='text-warning'>= {total} Rs.</span></span> */}
                {cartItems.map((item,index)=>{ return <li className=' d-flex justify-content-between align-items-center'>Item {index+1}
                <span className='text-warning'>{`${item.price} x ${item.qty} = ${item.qty*item.price}`} Rs.</span></li>})}
              </li>
              <li className="list-group-item text-light d-flex justify-content-between align-items-center border-0 border-top px-0 " style={{ background: "#151515" }}>
                Sub-Total
                <span className='text-warning'>{total} Rs.</span>
              </li>
              <li className="list-group-item text-light d-flex justify-content-between align-items-center border-0 border-top px-0 " style={{ background: "#151515" }}>
                Shipping
                <span className='text-warning'>{(total*2)/100} Rs.</span>
              </li>
              <li
                className="list-group-item text-light d-flex justify-content-between align-items-center border-0 border-top px-0 mb-3" style={{ background: "#151515" }}>
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong className='text-warning'>{total+(total*2)/100} Rs.</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-warning btn-lg btn-block text-light" onClick={()=>{userInfo?navigate('/address'):alert("Login to add order!!!!")}}>
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>}
<Footer/>
    </>
  )
}

export default CartPage
