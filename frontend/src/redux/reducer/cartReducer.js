import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS,CART_REMOVE_SHIPPING_ADDRESS,CART_EMPTY } from "../../constant/cartConstant.js";
const savedCartItems=JSON.parse(localStorage.getItem('cartItems'))||[]
const savedShippingAddress=JSON.parse(localStorage.getItem('shippingAddress'))||[]
export const cartReducer=(state={cartItems:savedCartItems,shippingAddress:savedShippingAddress},action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item=action.payload
            const existingItem=state.cartItems.find((x)=>{
            return (x.product===item.product)
            })
            if(existingItem){
                return{
                ...state,
                cartItems:state.cartItems.map(x=>x.product===existingItem.product?item:x)}
            }else{
                return{
                    ...state,cartItems:[...state.cartItems,item]
                }
            }
        case CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(x=>x.product!==action.payload)
            }
        case CART_EMPTY:
            return{}
        case CART_SAVE_SHIPPING_ADDRESS:
            return{...state,shippingAddress:action.payload}
        case CART_REMOVE_SHIPPING_ADDRESS:
            return{}
        default:
            return state
    }
}