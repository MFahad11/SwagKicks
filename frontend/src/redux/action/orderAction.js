import axios from 'axios'
import { ORDER_CREATE_FAIL,ORDER_CREATE_SUCCESS,ORDER_CREATE_REQUEST,MY_ORDER_LIST_FAIL,MY_ORDER_LIST_REQUEST,MY_ORDER_LIST_SUCCESS } from '../../constant/orderConstant'
export const createOrder=(order)=> async (dispatch,getState)=>{
    try {
        dispatch({
            type:ORDER_CREATE_REQUEST
        })
        const {userLogin:{userInfo}}=getState();
        const config={
            headers:{
                'Content-Type':"application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data}=await axios.post('http://localhost:8000/api/confirmOrder',order,config)
        dispatch({type:ORDER_CREATE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:ORDER_CREATE_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}
export const listMyOrders=()=> async (dispatch,getState)=>{
    try {
        dispatch({
            type:MY_ORDER_LIST_REQUEST
        })
        const {userLogin:{userInfo}}=getState();
        const config={
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data}=await axios.get('http://localhost:8000/api/myOrders',config)
        
        dispatch({type:MY_ORDER_LIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:MY_ORDER_LIST_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}
export const deliverOrders=(orderid)=> async (dispatch,getState)=>{
    
    dispatch({
        type:"ALL_ORDERS_REQUEST"
    })
    try {
        const {response}=await axios.post('http://localhost:8000/api/orderdeliver',{orderid})

        const {data}=await axios.get('http://localhost:8000/api/allorders')
        dispatch({type:"ALL_ORDERS_SUCCESS",payload:data})
    } catch (error) {
        
        dispatch({
            
            type:"ALL_ORDERS_FAIL",
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}
export const deleteOrders=(orderid)=> async (dispatch,getState)=>{
    
    dispatch({
        type:"ALL_ORDERS_REQUEST"
    })
    try {
        const {response}=await axios.post('http://localhost:8000/api/orderdelete',{orderid})
        const {data}=await axios.get('http://localhost:8000/api/allorders')
        dispatch({type:"ALL_ORDERS_SUCCESS",payload:data})
    } catch (error) {
        
        dispatch({
            
            type:"ALL_ORDERS_FAIL",
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}
export const getAllPendingOrders=()=> async (dispatch,getState)=>{
    dispatch({
        type:"ALL_PENDING_ORDERS_REQUEST"
    })
    try {
        const {data}=await axios.get('http://localhost:8000/api/pendingorders')
        // console.log(data)
        dispatch({type:"ALL_PENDING_ORDERS_SUCCESS",payload:data})
    } catch (error) {
        dispatch({
            type:"ALL_PENDING_ORDERS_FAIL",
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}
export const getAllOrders=()=> async (dispatch,getState)=>{
    dispatch({
        type:"ALL_ORDERS_REQUEST"
    })
    try {
        const {data}=await axios.get('http://localhost:8000/api/allorders')
        // console.log(data)
        dispatch({type:"ALL_ORDERS_SUCCESS",payload:data})
    } catch (error) {
        dispatch({
            type:"ALL_ORDERS_FAIL",
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}
export const listOrderDetails=(id)=>
async (dispatch)=>{
    try{
        dispatch({type:"ORDER_DETAILS_REQUEST"})
        const {data}=await axios.get(`http://localhost:8000/api/order/${id}`)
        dispatch({
            type:"ORDER_DETAILS_SUCCESS",
            payload:data
        })
    }catch(error){
        dispatch({
            type:"ORDER_DETAILS_FAILS",
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}