import axios from 'axios'
import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_REMOVE_SHIPPING_ADDRESS, CART_SAVE_SHIPPING_ADDRESS } from '../../constant/cartConstant'
export const addToCart=(id,size,qty)=>
    async (dispatch,getState)=>{
        const {data}=await axios.get(`http://localhost:8000/api/product/${id}`)
        dispatch({
            type:CART_ADD_ITEM,
            payload:{
                product:data._id,
                name:data.name,
                color:data.color,
                image:data.gridImage,
                price:data.price,
                stock:data.stock,
                size,
                qty
            }
        })
        // console.log(JSON.stringify(getState().cart.cartItems))
        localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
    }
export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,payload:id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
export const emptyCart=()=> dispatch=>{
    localStorage.removeItem('cartItems')
    dispatch({type:CART_EMPTY})
}
export const saveShippingAddress=(data)=>dispatch=>{
    dispatch({type:CART_SAVE_SHIPPING_ADDRESS,payload:data})
    localStorage.setItem('shippingAddress',JSON.stringify(data))
}
export const removeAddress=()=> dispatch=>{
    localStorage.removeItem('shippingAddress')
    dispatch({type:CART_REMOVE_SHIPPING_ADDRESS})
}