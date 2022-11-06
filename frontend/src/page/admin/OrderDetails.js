import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { listOrderDetails } from '../../redux/action/orderAction'
import Loader from '../../components/loader/Loader'
import Alert from '../../components/alert/Alert'
const OrderDetails = () => {
    const dispatch=useDispatch()
    const {loading,error,order}=useSelector(state=>state.orderDetails)
    const {id}=useParams()
    // console.log(order.order.orderItems[0].image)
    useEffect(()=>{
        dispatch(listOrderDetails(id))
    },[dispatch])
  return (
<div class="container-fluid">

{loading?<Loader/>:error?<Alert variant="Error Please try again"/>:order.order?<div class="container">


  <div class="row mt-5">
    <div class="col-lg-8">
      <div class="card mb-4">
        <div class="card-body">
          <div class="mb-3 d-flex justify-content-between">
            <div>
              <span class="me-3">{order.order.createdAt.split("T")[0]}</span>
              <span class="me-3">#{order.order._id}</span>
              
              <span class="badge rounded-pill bg-info">{order.order.status}</span>
            </div>
            <div class="d-flex">
            </div>
          </div>
          <table class="table table-borderless">
            <tbody>
              {order.order.orderItems.map(({image,name,price,qty,size},index)=>{return <tr>
                <td>
                  <div class="d-flex mb-2">
                    <div class="flex-shrink-0">
                      <img src={image} alt="" width="100" class="img-fluid"/>
                    </div>
                    <div class="flex-lg-grow-1 ms-3 align-items-end">
                      <h6 class="small mb-0"><a href="#" class="text-reset">{name}</a></h6>
                      <small>Size: {size}</small>
                    </div>
                  </div>
                </td>
                <td>{qty}</td>
                <td class="text-end">{price}</td>
              </tr>
              })}
            </tbody>
            <tfoot className='border border-dark border-0 border-top'>
              <tr class="fw-bold">
                <td colspan="2">TOTAL</td>
                <td class="text-end">{order.order.totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6">
              <h3 class="h6">Payment Method</h3>
              <p>Cash On Delivery <br/>
              Total: {order.order.totalPrice}<span class="badge bg-success rounded-pill ms-3">{order.order.status==="Pending"?"PENDING":"PAID"}</span></p>
            </div>
            <div class="col-lg-6">
              <h3 class="h6">Billing address</h3>
              <address>
                <strong>{order.user.firstName} {order.user.lastName}</strong><br/>
                {order.order.shippingAddress.address}<br/>
                {order.order.shippingAddress.city}, {order.order.shippingAddress.postalCode}<br/>
                {order.order.shippingAddress.number}
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card mb-4">

        <div class="card-body">
          <h3 class="h6">Shipping Information</h3>
          <strong>TCS</strong>
          <span><a href="#" class="text-decoration-underline" target="_blank">FF1234567890</a> <i class="bi bi-box-arrow-up-right"></i> </span>
          <hr/>
          <h3 class="h6">Address</h3>
          <address>
            <strong>{order.user.firstName} {order.user.lastName}</strong><br/>
            {order.order.shippingAddress.address}<br/>
            {order.order.shippingAddress.city}, {order.order.shippingAddress.postalCode}<br/>
            {order.order.shippingAddress.number}
          </address>
        </div>
      </div>
    </div>
  </div>
</div>:""}
  </div>
  )
}

export default OrderDetails
