import axios from "axios"
import swal from 'sweetalert'
import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILS } from "../../constant/productConstant.js"
export const listProducts=()=>
    async (dispatch)=>{
        try{
            dispatch({type:PRODUCT_LIST_REQUEST})
            const {data}=await axios.get('http://localhost:8000/api/products')
            dispatch({
                type:PRODUCT_LIST_SUCCESS,
                payload:data
            })
        }catch(error){
            dispatch({
                type:PRODUCT_LIST_FAILS,
                payload:error.response && error.response.data.message?error.response.data.message:error.message
            })
        }
    }
    export const listProductDetails=(id)=>
    async (dispatch)=>{
        try{
            dispatch({type:PRODUCT_DETAILS_REQUEST})
            const {data}=await axios.get(`http://localhost:8000/api/product/${id}`)
            dispatch({
                type:PRODUCT_DETAILS_SUCCESS,
                payload:data
            })
        }catch(error){
            dispatch({
                type:PRODUCT_DETAILS_FAILS,
                payload:error.response && error.response.data.message?error.response.data.message:error.message
            })
        }
    }
    export const addProduct=(data)=> async dispatch=>{
        dispatch({type:"ADD_PRODUCT_REQUEST"})
        try {
            // const config={headers:{'Content-Type':'application/json'}}
            // console.log(data)
            await axios.post('http://localhost:8000/api/addproduct',{data})
            dispatch({
                type:"ADD_PRODUCT_SUCCESS"
            })
        } catch (error) {
            dispatch({type:"ADD_PRODUCT_FAIL",
            payload:error.response && error.response.data.message?error.response.data.message:error.message})       
        }
    }
    export const updateProduct=(data)=> async dispatch=>{
        dispatch({type:"UPDATE_PRODUCT_REQUEST"})
        try {
            // const config={headers:{'Content-Type':'application/json'}}
            // console.log(data)
            const response=await axios.post('http://localhost:8000/api/updateproduct',{data})
            dispatch({
                type:"UPDATE_PRODUCT_SUCCESS",payload:response.data
            })
            window.location.href='/admin/products'
        } catch (error) {
            dispatch({type:"UPDATE_PRODUCT_FAIL",
            payload:error.response && error.response.data.message?error.response.data.message:error.message})       
        }
    }
    export const deleteProduct=(id)=> async (dispatch)=>{
        try {
            const response=await axios.post('http://localhost:8000/api/deleteproduct',{id})
            swal("Product deleted!!!","success")
            window.location.href='/admin'
        } catch (error) {
            swal("Error while deleteing")
        }
    }
    export const sortAscProduct=()=>async dispatch=>{
        
        dispatch({type:PRODUCT_LIST_REQUEST})
        try{
            let {data}=await axios.get('http://localhost:8000/api/products')
            data.sort(((item1,item2)=>item1.price-item2.price))
            dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
            
        }
        catch(error){
            dispatch({type:PRODUCT_LIST_FAILS,payload:error})
        }
    }
    export const sortDescProduct=()=>async dispatch=>{
        
        dispatch({type:PRODUCT_LIST_REQUEST})
        try{
            let {data}=await axios.get('http://localhost:8000/api/products')
            data.sort(((item1,item2)=>item2.price-item1.price))
            dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
        }
        catch(error){
            dispatch({type:PRODUCT_LIST_FAILS,payload:error})
        }
    }