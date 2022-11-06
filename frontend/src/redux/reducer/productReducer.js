import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILS } from "../../constant/productConstant.js"
export const productListReducer=(state={products:[]},action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}
        case PRODUCT_LIST_FAILS:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
export const productDetailReducer=(state={product:{}},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCT_DETAILS_FAILS:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
export const AddProductReducer=(state={},action)=>{
    switch(action.type){
        case "ADD_PRODUCT_REQUEST":
            return {load:true,...state}
        case "ADD_PRODUCT_SUCCESS":
            return {load:false,success:true}
        case "ADD_PRODUCT_FAILS":
            return {load:false,err:action.payload}
        default:
            return state
    }
}
export const UpdateProductReducer=(state={},action)=>{
    switch(action.type){
        case "UPDATE_PRODUCT_REQUEST":
            return {load:true,...state}
        case "UPDATE_PRODUCT_SUCCESS":
            return {load:false,success:true}
        case "UPDATE_PRODUCT_FAILS":
            return {load:false,err:action.payload}
        default:
            return state
    }
}