import React from 'react'
import './Banner.css'
import mainpic from './main-img.jpg'
import mainpic1 from './main-img1.jpg'
const Banner = () => {
  return (
    <>
     <div className='container-fluid showcase' style={{backgroundImage:`url(${mainpic})`}}>

     </div>
     <div className='container-fluid showcase' style={{backgroundImage:`url(${mainpic1})`}}>

    </div> 
    </>
  )
}

export default Banner;