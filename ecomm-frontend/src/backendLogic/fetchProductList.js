import axios from 'axios';

export const fetchLatestProductFromBackend=async()=>{
    const {data}=await axios.get('/api/products/')
    //console.log(data)
    return(data);
}