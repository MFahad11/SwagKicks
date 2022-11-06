import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailReducer,AddProductReducer,UpdateProductReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducer.js';
import {orderCreateReducer, orderListReducer,allOrderReducer, allPendingOrderReducer, orderDetailReducer} from './reducer/orderReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer,userRegisterReducer,userDetailsReducer, userListReducer } from './reducer/userReducer';
// import { updateProduct } from './action/productAction';
const userInfoFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
// const userInfoRFromStorage=localStorage.getItem('userInfoR')?JSON.parse(localStorage.getItem('userInfoR')):null
const cartItemsFromStorage=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const shippingAddressFromStorage=localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{}
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    orderCreate:orderCreateReducer,
    orderListMy:orderListReducer,
    userDetails:userDetailsReducer,
    userList:userListReducer,
    addProduct:AddProductReducer,
    updateProduct:UpdateProductReducer,
    pendingOrders:allPendingOrderReducer,
    allOrders:allOrderReducer,
    orderDetails:orderDetailReducer
});
// console.log(localStorage.getItem('cartItems'))
const initialState={cart:{cartItems:cartItemsFromStorage,shippingAddress:shippingAddressFromStorage},userLogin:{userInfo:userInfoFromStorage}};
const middleware=[thunk]
const productStore=configureStore({reducer:reducer},initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default productStore