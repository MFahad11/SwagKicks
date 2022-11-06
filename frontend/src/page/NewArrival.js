import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
const NewArrival = () => {
  return (
    <>
    <NavBar/>
      <ProductDisplay page="New Arrivals"/>
    <Footer/>
    </>
  )
}

export default NewArrival
