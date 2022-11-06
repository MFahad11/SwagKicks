import { USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST, USER_LOGOUT,USER_REGISTER_FAIL,USER_REGISTER_SUCCESS,USER_REGISTER_REQUEST,USER_DETAILS_FAIL,USER_DETAILS_SUCCESS,USER_DETAILS_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAILS, USER_LIST_REQUEST } from "../../constant/userConstant";
const savedUser=JSON.parse(localStorage.getItem('userInfo'))||null
// const savedUserR=JSON.parse(localStorage.getItem('userInfoR'))||null
// console.log(savedUser)
export const userLoginReducer=(state={userInfo:savedUser},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return{loading:false,userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return{loading:false,error:action.payload}
        case USER_LOGOUT:
            return{}
        default:
            return state;
    }
}
export const userRegisterReducer=(state={userInfo:savedUser},action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {load:true}
        case USER_REGISTER_SUCCESS:
            return{load:false,userInfo:action.payload}
        case USER_REGISTER_FAIL:
            return{load:false,errorR:action.payload}
        default:
            return state;
    }
}
export const userListReducer=(state={users:[]},action)=>{
    switch(action.type){
        case USER_LIST_REQUEST:
            return {loading:true,users:[]}
        case USER_LIST_SUCCESS:
            return {loading:false,users:action.payload}
        case USER_LIST_FAILS:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
export const userDetailsReducer=(state={user:{}},action)=>{
    // console.log(1)
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return {...state,loading:true}
    // console.log(2)

        case USER_DETAILS_SUCCESS:
            return{loading:false,user:action.payload}
    // console.log(3)

        case USER_DETAILS_FAIL:
            return{loading:false,error:action.payload}
    // console.log(4)

        default:
            return state;
    }
}