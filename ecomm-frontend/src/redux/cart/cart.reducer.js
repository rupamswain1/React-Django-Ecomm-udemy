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
        case CartTypes.SUBTRACT_PRODUCT_FROM_CART_START:
            return{
                ...state,
                isCartUpdating:true,
            }
        case CartTypes.ADD_PRODUCT_TO_CART_SUCCESS:
            //console.log(action)
            console.log(action.quantity)
                //console.log(state.cartItems[action._id].expectedQuantity)
            if(state.cartItems[action._id]!=undefined){
                if(state.cartItems[action._id].expectedQuantity!=state.cartItems[action._id].actualQuantity){
                    state.cartItems[action._id].expectedQuantity=state.cartItems[action._id].actualQuantity
                }
                state.cartItems[action._id].expectedQuantity=parseInt(state.cartItems[action._id].expectedQuantity)+action.quantity;
                if(action.countInStock<=state.cartItems[action._id].expectedQuantity){
                    if(state.cartItems[action._id].actualQuantity+action.quantity>=action.countInStock)
                        state.cartItems[action._id].actualQuantity=action.countInStock;
                    else{
                        state.cartItems[action._id].actualQuantity=state.cartItems[action._id].actualQuantity+action.quantity
                    }
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
                    _id:action._id
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
        case CartTypes.REMOVE_ITEM_FROM_CART_START:
            return{
                ...state,
                isCartUpdating:true,
            }
        case CartTypes.REMOVE_ITEM_FROM_CART_SUCCESS:
            delete state.cartItems[action.prodId];
            console.log(state.cartItems[action.prodId])
            return{
                ...state,
                isCartUpdating:false,
                cartItems:{...state.cartItems},
            }
        case CartTypes.REMOVE_ITEM_FROM_CART_FAIL:
            return{
            ...state,
            isCartUpdating:false,
            error:action.payload
            }
        case CartTypes.SUBTACT_PRODUCT_FROM_CART_SUCCESS:
            if(state.cartItems[action.prodId].actualQuantity>1){
            state.cartItems[action.prodId].actualQuantity=state.cartItems[action.prodId].actualQuantity-action.quantity;
            state.cartItems[action.prodId].expectedQuantity=state.cartItems[action.prodId].expectedQuantity-action.quantity;
            }
            return{
                ...state,
                isCartUpdating:false,
                cartItems:{...state.cartItems},
            }
        case CartTypes.SUBTACT_PRODUCT_FROM_CART_FAIL:
            return{
            ...state,
            isCartUpdating:false,
            error:action.payload
            }
        default:
            return state;
    }
}