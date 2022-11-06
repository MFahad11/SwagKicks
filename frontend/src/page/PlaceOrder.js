import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import ALert from '../components/alert/Alert'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import { emptyCart } from '../redux/action/cartAction'
import {createOrder} from '../redux/action/orderAction'
const PlaceOrder = () => {
  const cart=useSelector(state=>state.cart)
  const navigate=useNavigate()
  // console.log(cart)
  const dispatch=useDispatch()
  const orderCreate=useSelector(state=>state.orderCreate)
  const {order,success,error}=orderCreate
  let totalPrice=0;
  const handleSubmit=()=>{
    // console.log("here")
  dispatch(createOrder({
    orderItems:cart.cartItems,
    shippingAddress:cart.shippingAddress,
    totalPrice:totalPrice
  }))
  }
  useEffect(()=>{
    if(success){
      
      dispatch(emptyCart())
      localStorage.removeItem("shippingAddress")
      navigate('/')
    }
    else{
      console.log(error)
    }
  },[navigate,success,error])
  return (
    <>
    <NavBar/>
  <div className='row'>
    <div className='col-8'>
    <ul class="list-group">
  <li class="list-group-item text-light border" style={{ background: "#151515" }}>
    <h3>Shipping</h3>
    <p>{cart.shippingAddress.address}<br/>{cart.shippingAddress.city}<br/>{cart.shippingAddress.postalCode}<br/>{cart.shippingAddress.number}</p>
  </li>
  <li class="list-group-item text-light border" style={{ background: "#151515" }}>
    <h3>Payment Method</h3>
    <p>Cash on Delivery</p>
  </li>
  <li class="list-group-item text-light border" style={{ background: "#151515" }}>
  <h3>Order Items</h3>
  {cart.cartItems.length===0?<ALert variant={"Your cart is empty"}/> : cart.cartItems.map((item)=>{{totalPrice+=item.qty*item.price};return <ul class="list-group">
  <li class="list-group-item text-light" style={{ background: "#151515" }}>
    <div className="row">
      <div className='col-1'>
        <img src={item.image} alt={item.name} className="img-fluid"/>
      </div>
      <div className='col'>
        <NavLink className="text-decoration-none" to={`/product/${item.product}`}>{item.name}</NavLink>
        <br/><small>Size: {item.size}</small>
      </div>
      <div className='col-4'>
          {item.qty} x {item.price} = {item.price*item.qty}
      </div>
    </div>
  </li>
</ul>})}
  </li>
</ul>
    </div>
    <div className="col-md-4">
        <div className="card mb-4" style={{ background: "#151515" }}>
          <div className="card-header py-3">
            <h5 className="mb-0 text-light">Summary</h5>
          </div>
          <div className="card-body" >
            <ul className="list-group list-group-flush" >
              <li
                className="list-group-item text-light d-flex justify-content-between align-items-center border-0 px-0 pb-0" style={{ background: "#151515" }}>
                Total Products
                <span className="text-warning me-4">{cart.cartItems.length}</span>
              </li>
              <li className="list-group-item text-light d-flex justify-content-between align-items-center border-0 border-top px-0 " style={{ background: "#151515" }}>
                Sub-Total
                <span className='text-warning'>{totalPrice} Rs.</span>
              </li>
              <li className="list-group-item text-light d-flex justify-content-between align-items-center border-0 border-top px-0 " style={{ background: "#151515" }}>
                Shipping
                <span className='text-warning'>{(totalPrice*2)/100} Rs.</span>
              </li>
              <li
                className="list-group-item text-light d-flex justify-content-between align-items-center border-0 border-top px-0 mb-3" style={{ background: "#151515" }}>
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong className='text-warning'>{totalPrice+(totalPrice*2)/100} Rs.</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-warning btn-lg btn-block text-light" onClick={handleSubmit}>
              Place Order
            </button>
          </div></div></div>
  </div>
  <Footer/>
    </>
  )
}

export default PlaceOrder