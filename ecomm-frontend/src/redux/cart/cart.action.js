import CartTypes from './cart.types';


export const addItemToCartStart=(prodId,quantity)=>(
    {
        type:CartTypes.ADD_PRODUCT_TO_CART_START,
        prodId:prodId,
        quantity:quantity,
        
    }
)

export const addItemToCartSuccess=(_id,name,image,price,countInStock,quantity)=>({
    type:CartTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    _id:_id,
    name:name,
    image:image,
    price:price,
    countInStock:countInStock,
    quantity:quantity
})

export const addItemToCartFailed=(error)=>({
    type:CartTypes.ADD_PRODUCT_TO_CART_FAIL,
    payload:error,
})

export const removeItemFromCartStart=(prodId)=>(
    {
        type:CartTypes.REMOVE_ITEM_FROM_CART_START,
        prodId:prodId,
    }
)

export const removeItemFromCartSuccess=(prodId)=>(
    {
        type:CartTypes.REMOVE_ITEM_FROM_CART_SUCCESS,
        prodId:prodId,
    }
)

export const removeItemFromCartFail=(error)=>(
    {
        type:CartTypes.REMOVE_ITEM_FROM_CART_FAIL,
        payload:error,
    }
)

export const subtractItemFromCartStart=(prodId,quantity)=>(
    {
        type:CartTypes.SUBTRACT_PRODUCT_FROM_CART_START,
        prodId:prodId,
        quantity:quantity,
        
    }
)
export const subtractItemFromCartSuccess=(prodId,quantity)=>(
    {
        type:CartTypes.SUBTACT_PRODUCT_FROM_CART_SUCCESS,
        prodId:prodId,
        quantity:quantity,
    }
)
export const subtractItemFromCartFailed=(error)=>({
    type:CartTypes.SUBTACT_PRODUCT_FROM_CART_FAIL,
    payload:error,
})
