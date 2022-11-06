import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import React from 'react'
import NavBar from './components/navbar/NavBar';
import CanvasJSReact from './canvasjs.react';
import Banner from './components/banner/Banner';
import HomeGrid from './components/homegrid/HomeGrid';
import Footer from './components/footer/Footer';
import Home from './page/Home';
import MostWanted from './page/MostWanted';
import NewArrival from './page/NewArrival';
import ProductPage from './page/ProductPage';
import CartPage from './page/CartPage'
import Product from './components/product/Product';
import ShippingPage from './page/ShippingPage';
import PlaceOrder from './page/PlaceOrder';
import MyOrders from './page/MyOrders';
import ProfilePage from './page/ProfilePage';
import AdminHome from './page/admin/AdminHome';
import ShowProducts from './page/admin/ShowProducts';
import ShowUsers from './page/admin/ShowUsers';
import EditProduct from './page/admin/EditProduct';
import ShowPendingOrders from './page/admin/ShowPendingOrders';
import ShowAllOrders from './page/admin/ShowAllOrders';
import OrderDetails from './page/admin/OrderDetails';
import UserOrderDetails from './page/UserOrderDetails';
import BarChart from './components/admin/BarChart';
import LineChart from './components/admin/LineChart';
import AllCharts from './page/admin/AllCharts';
const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/most_wanted' element={<MostWanted />}></Route>
          <Route path='/new_arrivals' element={<NewArrival/>}></Route>
          <Route path='/product/:id' element={<Product/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/cart/:id/:size' element={<CartPage/>}></Route>
          <Route path='/address' element={<ShippingPage/>}></Route>
          <Route path='/placeOrder' element={<PlaceOrder/>}></Route>
          <Route path='/myOrders' element={<MyOrders/>}></Route>
          <Route path='/orderdetails/:id' element={<UserOrderDetails/>}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
          <Route path='/admin' element={<AdminHome/>}>
            {/* <Route path='' element={<BarChart/>}/> */}
            <Route path='' element={<AllCharts/>}/>
            <Route path='products' element={<ShowProducts/>}/>
            <Route path='users' element={<ShowUsers/>}/>
            <Route path='editProduct/:id' element={<EditProduct/>}/>
            <Route path='orders' element={<ShowAllOrders/>}/>
            <Route path='pendingorders' element={<ShowPendingOrders/>}/>
            <Route path='orderdetail/:id' element={<OrderDetails/>}/>
          </Route>
          {/* <Route path='/show_products' element={<ShowProducts/>}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
