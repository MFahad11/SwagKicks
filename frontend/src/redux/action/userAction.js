import axios from 'axios'
import { USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST, USER_LOGOUT,USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAILS } from "../../constant/userConstant";

export const login=(email,password)=> async dispatch=>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const config={headers:{'Content-Type':'application/json'}}
        const {data}= await axios.post('http://localhost:8000/api/login',{email,password},config)
        if(data.status==="success"){
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        
    localStorage.setItem('userInfo',JSON.stringify(data))
    window.location.reload()
}
    
    else{
        alert(data.message)
    }
    } catch (error) {
        dispatch({type:USER_LOGIN_FAIL,
        payload:error.response && error.response.data.message?error.response.data.message:error.message})       
    }
}
export const register=(firstName,lastName,email,password)=> async dispatch=>{
    try {
        dispatch({type:USER_REGISTER_REQUEST})
        const config={headers:{'Content-Type':'application/json'}}
        const {data}= await axios.post('http://localhost:8000/api/register',{firstName,lastName,email,password},config)
        
        if(data.status==="success"){
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        
        localStorage.setItem('userInfo',JSON.stringify(data))
        window.location.reload()
        }
        else{
            alert(data.message)
        }
    } catch (error) {
        dispatch({type:USER_REGISTER_FAIL,
        payload:error.response && error.response.data.message?error.response.data.message:error.message})       
    }
    var delete_time=new Date().getHours()+3
}
export const listUsers=()=>
    async (dispatch)=>{
        try{
            dispatch({type:USER_LIST_REQUEST})
            const {data}=await axios.get('http://localhost:8000/api/users')
            dispatch({
                type:USER_LIST_SUCCESS,
                payload:data
            })
        }catch(error){
            dispatch({
                type:USER_LIST_FAILS,
                payload:error.response && error.response.data.message?error.response.data.message:error.message
            })
        }
    }
export const getUserDetails=()=> async (dispatch,getState)=>{
    try {
    // console.log(5)
        dispatch({type:USER_DETAILS_REQUEST})
        const {userLogin:{userInfo}}=getState()
        // console.log(userInfo)
        const config={headers:{'Content-Type':'application/json',Authorization:`Bearer ${userInfo.token}`}}
        // console.log(config)
        const {data}= await axios.get('http://localhost:8000/api/showData',config)
        // console.log(data)
        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data
        });
        // console.log(6)
    } catch (error) {
        // console.log(7)
        dispatch({type:USER_DETAILS_FAIL,
        payload:error.response && error.response.data.message?error.response.data.message:error.message})       
    }
}
export const deleteUser=(id)=> async (dispatch)=>{
    try {
        const response=await axios.post('http://localhost:8000/api/deleteuser',{id})
        
        window.location.href='/admin/users'
    } catch (error) {
        
    }
}
export const logout=()=> dispatch=>{
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
}