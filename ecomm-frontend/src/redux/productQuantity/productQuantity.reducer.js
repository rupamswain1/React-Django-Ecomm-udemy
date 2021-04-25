import ProductQuantityTypes from './productQuantity.type';

const INITIAL_STATE={
    productQuantity:{},
}

export const ProductQuantityReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ProductQuantityTypes.ADD_PRODUCT_QUANTITY:
            if(state.productQuantity[action.payload]!=undefined){
                state.productQuantity[action.payload]=parseInt(state.productQuantity[action.payload])+1
            }
            
            return{
                ...state,
                productQuantity:{...state.productQuantity},
            }
        case ProductQuantityTypes.REMOVE_PRODUCT_QUANTITY:
            if(state.productQuantity[action.payload]!=undefined){
                if(state.productQuantity[action.payload]>0){
                state.productQuantity[action.payload]=parseInt(state.productQuantity[action.payload])-1;
                }
            }
            
            return{
                ...state,
                productQuantity:{...state.productQuantity},
            }
        case ProductQuantityTypes.UPDATE_INITIAL_PRODUCT_QUANTITY:
            state.productQuantity[action.prodId]=action.quantity;
            return{
                ...state,
            }
        default:
            return state;
    };
}

