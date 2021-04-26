import CartTypes from './cart.types';

const INITIAL_STATE={
    cartItems:{},
    isCartUpdating:false,
    error:"",
}
export const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartTypes.ADD_PRODUCT_TO_CART_START:
            return{
                ...state,
                isCartUpdating:true,
            }
        case CartTypes.ADD_PRODUCT_TO_CART_SUCCESS:
            console.log(action)
            if(state.cartItems[action._id]!=undefined){
                state.cartItems[action._id].quantity=parseInt(state.cartItems[action._id].quantity)+action.quantity;
            }
            else{
                state.cartItems[action._id]={
                    name:action.name,
                    image:action.image,
                    price:action.price,
                    countInStock:action.countInstock,
                    quantity:action.quantity
                }
            }
            return{
                ...state,
                cartItems:{...state.cartItems},
                isCartUpdating:false
            }
        case CartTypes.ADD_PRODUCT_TO_CART_FAIL:
            return{
                ...state,
                isCartUpdating:false,
                error:action.payload,
            }
        default:
            return state;
    }
}