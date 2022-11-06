import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './adminhome.css'
import logo from "../../components/navbar/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {HashRouter, Link, Outlet} from 'react-router-dom'
import {
    faUser,
    faShoppingBag,
    faTruckFast,
    faSackDollar,
    faShop,
    faMagnifyingGlass,
    faBell,

} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router,Routes,Route,useNavigate } from 'react-router-dom';
import MainPage from './ShowUsers';
import ShowProducts from './ShowProducts';
import { useSelector,useDispatch } from 'react-redux';
import { getAllOrders, getAllPendingOrders } from '../../redux/action/orderAction';
import { listUsers, logout } from '../../redux/action/userAction';
import { listProducts } from '../../redux/action/productAction';
const AdminHome = () => {
    const dispatch = useDispatch();
    // const navigate=useNavigate()
    const {orders} = useSelector(
    (state) => state.allOrders
    );
    const {orders:pendingOrders} = useSelector(
        (state) => state.pendingOrders
        );
    const {users} = useSelector(
        (state) => state.userList
      );
      const {products } = useSelector(
        (state) => state.productList
      );
    const navigate=useNavigate()
    
    const {userInfo}=useSelector(state=>state.userLogin)
    useEffect(() => {
        if(userInfo===null || userInfo.data.role==="user"){
            window.location.href='/'
        }
        dispatch(listUsers());
        dispatch(listProducts())
        dispatch(getAllOrders())
        dispatch(getAllPendingOrders())
      }, [dispatch]);
    // console.log(userInfo)
    // if(userInfo===null || userInfo.data.role==="user"){
    //     window.location.href='/'
    // }
  return (
    <div className='adminhome'>
        <div class="side-menu">
        <NavLink
          to='/admin'
            className=" mx-auto mt-4 d-flex align-items-center h2 text-light"
          >
            <div className="flex-shrink-0">
              <img
                src={logo}
                width="60"
                height="54"
                className="d-inline-block align-text-top"
              />
            </div>
            <span className="ms-1 flex-grow-1">SwagKicks</span>
          </NavLink>
            <ul className='mt-3'>
                <li><Link to='/admin/products'><FontAwesomeIcon icon={faShop} style={{fontSize: '2.5rem'}}/>&nbsp;<span>Products</span></Link></li>
                <li><Link to='/admin/users'><FontAwesomeIcon icon={faUser} style={{fontSize: '2.5rem'}}/>&nbsp;<span>Users</span></Link></li>
                <li><Link to='/admin/orders'><FontAwesomeIcon icon={faShoppingBag} style={{fontSize: '2.5rem'}}/>&nbsp;<span>Orders</span></Link></li>
                <li><Link to='/admin/pendingorders'><FontAwesomeIcon icon={faTruckFast} style={{fontSize: '2.5rem'}}/>&nbsp;<span>Pending Orders</span></Link></li>

            </ul>
        </div>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="search mt-2">
                    <div class="input-group mb-3 w-50">
                        <input type="text" class="form-control h-100" placeholder="Search..."/>
                        <button class="btn" type="button"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    </div>
                </div>
                <div class="user">
                    <a onClick={()=>{dispatch(logout());navigate('/')}} class="btn" disabled>Logout</a>
                    <FontAwesomeIcon icon={faBell} className="fs-3 text-warning"/>
                    <div class="img-case">
                        <FontAwesomeIcon icon={faUser} className="fs-2 text-warning"/> Admin
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="cards">
                <div class="card">
                    <div class="box">
                        <h1 className='text-center'>{users.length}</h1>
                        <h3>Users</h3>
                    </div>
                    <FontAwesomeIcon icon={faUser} style={{fontSize: '2.5rem'}}/>
                    </div>
                <div class="card">
                    <div class="box">
                        <h1 className='text-center'>{orders.length}</h1>
                        <h3>Total Orders</h3>
                    </div>
                    <FontAwesomeIcon icon={faShoppingBag} style={{fontSize: '2.5rem'}}/>                </div>
                <div class="card">
                    <div class="box">
                        <h1 className='text-center'>{pendingOrders.length}</h1>
                        <h3>Pending Orders</h3>
                    </div>
                    <FontAwesomeIcon icon={faTruckFast} style={{fontSize: '2.5rem'}}/>                </div>
                <div class="card">
                    <div class="box">
                        <h1 className='text-center'>{products.length}</h1>
                        <h3>Products</h3>
                    </div>
                    <FontAwesomeIcon icon={faShop} style={{fontSize: '2.5rem'}}/>                </div>
                </div>
            </div>
        <Outlet/>
        {/* <Routes>
            <Route path='/show_products' element={<ShowProducts/>}/></Routes> */}
        </div> 
    </div>
  )
}

export default AdminHome
