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
            //console.log(action)
            console.log(action.countInStock)
                //console.log(state.cartItems[action._id].expectedQuantity)
            if(state.cartItems[action._id]!=undefined){
                state.cartItems[action._id].expectedQuantity=parseInt(state.cartItems[action._id].expectedQuantity)+action.quantity;
                
                if(action.countInStock<=state.cartItems[action._id].expectedQuantity){
                    console.log('called')
                    state.cartItems[action._id].actualQuantity=action.countInStock;
                }
                else{
                    console.log('called')
                    state.cartItems[action._id].actualQuantity=state.cartItems[action._id].expectedQuantity;
                }
            }
            else{
                let actualqty=0;
                let expectedqty=0;
                if(action.countInStock<=action.quantity){
                    actualqty=action.countInStock;
                    expectedqty=action.quantity
                }
                else{
                    actualqty=action.quantity;
                    expectedqty=action.quantity;
                }
                state.cartItems[action._id]={
                    name:action.name,
                    image:action.image,
                    price:action.price,
                    countInStock:action.countInStock,
                    quantity:action.quantity,
                    expectedQuantity:expectedqty,
                    actualQuantity:actualqty,
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