import ProductQuantityTypes from './productQuantity.type';

export const addLocalProductQuantity=(prodId)=>({
    type:ProductQuantityTypes.ADD_PRODUCT_QUANTITY,
    payload:prodId
})
export const removeLocalProductQuantity=(prodId)=>({
    type:ProductQuantityTypes.REMOVE_PRODUCT_QUANTITY,
    payload:prodId
})

export const updateInitialProductQuantity=(prodId,quantity)=>({
    type:ProductQuantityTypes.UPDATE_INITIAL_PRODUCT_QUANTITY,
    prodId:prodId,
    quantity:quantity,
})