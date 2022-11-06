import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../redux/action/userAction'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import HomeGrid from '../components/homegrid/HomeGrid'
import NavBar from '../components/navbar/NavBar'

const Home = () => {

  return (
    <>
    <NavBar/>
    <Banner/>
    <HomeGrid/>
    <Footer/>
    </>
  )
}

export default Home
