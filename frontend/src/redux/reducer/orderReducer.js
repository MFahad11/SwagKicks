import { ORDER_CREATE_FAIL,ORDER_CREATE_SUCCESS,ORDER_CREATE_REQUEST,MY_ORDER_LIST_FAIL,MY_ORDER_LIST_REQUEST,MY_ORDER_LIST_SUCCESS, MY_ORDER_LIST_RESET } from "../../constant/orderConstant";
export const orderCreateReducer=(state={},action)=>{
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return {loading:true}
        case ORDER_CREATE_SUCCESS:
            return{loading:false,success:true,order:action.payload}
        case ORDER_CREATE_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state
    }
}
export const orderListReducer=(state={orders:[]},action)=>{
    switch(action.type){
        case MY_ORDER_LIST_REQUEST:
            return {loading:true}
        case MY_ORDER_LIST_SUCCESS:
            return{loading:false,orders:action.payload}
        case MY_ORDER_LIST_FAIL:
            return{loading:false,error:action.payload}
        case MY_ORDER_LIST_RESET:
            return {order:[]}
        default:
            return state
    }
    
}
export const allPendingOrderReducer=(state={orders:[]},action)=>{
    switch(action.type){
        case "ALL_PENDING_ORDERS_REQUEST":
            return {loading:true,...state}
        case "ALL_PENDING_ORDERS_SUCCESS":
            return{loading:false,success:true,orders:action.payload}
        case "ALL_PENDING_ORDERS_FAIL":
            return{loading:false,error:action.payload}
        default:
            return state
    }
}
export const allOrderReducer=(state={orders:[]},action)=>{
    switch(action.type){
        case "ALL_ORDERS_REQUEST":
            return {loading:true,...state}
        case "ALL_ORDERS_SUCCESS":
            return{loading:false,success:true,orders:action.payload}
        case "ALL_ORDERS_FAIL":
            return{loading:false,error:action.payload}
        default:
            return state
    }
}
export const orderDetailReducer=(state={order:{}},action)=>{
    switch(action.type){
        case "ORDER_DETAILS_REQUEST":
            return {loading:true,...state}
        case "ORDER_DETAILS_SUCCESS":
            return {loading:false,order:action.payload}
        case "ORDER_DETAILS_FAILS":
            return {loading:false,error:action.payload}
        default:
            return state
    }
}