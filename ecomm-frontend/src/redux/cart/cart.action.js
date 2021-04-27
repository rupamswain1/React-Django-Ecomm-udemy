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