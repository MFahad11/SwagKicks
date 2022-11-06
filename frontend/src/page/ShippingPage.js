import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import { saveShippingAddress } from '../redux/action/cartAction'
const ShippingPage = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const cart=useSelector(state=>state.cart)
    // console.log(useSelector(state=>state.cart))
    const {shippingAddress}=cart
    // console.log(shippingAddress)
    const [address,setAddress]=useState(`${(shippingAddress && shippingAddress.length>0)?shippingAddress.address:""}`)
    const [city,setCity]=useState(`${shippingAddress && shippingAddress.length>0?shippingAddress.city:""}`)
    const [number,setNumber]=useState(`${shippingAddress && shippingAddress.length>0?shippingAddress.number:""}`)
    const [postalCode,setPostalCode]=useState(`${shippingAddress && shippingAddress.length>0?shippingAddress.postalCode:""}`)
    // console.log(address)
    return (
      <>
      <NavBar/>
    <div className='conatiner w-50 mx-auto mt-5 mb-5 p-4' style={{background: "#151515"}}>
      <form class="row g-3 text-light" onSubmit={(e)=>{e.preventDefault();dispatch(saveShippingAddress({address,city,number,postalCode}));navigate('/placeOrder')}}>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" required id="inputAddress" placeholder="Enter Your Address..." value={address} onChange={(e)=>{setAddress(e.currentTarget.value)}}/>
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" required id="inputCity" placeholder='Enter Your City...' value={city} onChange={(e)=>{setCity(e.currentTarget.value)}}/>
  </div>

  <div class="col-md-4">
    <label for="inputNumber" class="form-label">Number</label>
    <input type="text" class="form-control" required id="inputNumber" placeholder='Enter Your Number' value={number} onChange={(e)=>{setNumber(e.currentTarget.value)}}/>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" required id="inputZip" placeholder='Enter Zip Code...' value={postalCode} onChange={(e)=>{setPostalCode(e.currentTarget.value)}}/>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-warning text-light">Add Address</button>
  </div>
</form>
    </div><Footer/></>
  )
}

export default ShippingPage
