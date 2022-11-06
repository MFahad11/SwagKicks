import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import OrderDetails from './admin/OrderDetails'

const UserOrderDetails = () => {
  return (
    <>
      <NavBar/>
      <OrderDetails/>
      <Footer/>
    </>
  )
}

export default UserOrderDetails
