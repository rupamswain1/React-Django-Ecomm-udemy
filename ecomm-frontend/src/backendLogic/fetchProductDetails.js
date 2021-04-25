import axios from 'axios';

export const fetchProductDetailsfromBackend=async (prodId)=>{
    const {data}=await axios.get(`/api/products/${prodId}/`);
    return data;
}