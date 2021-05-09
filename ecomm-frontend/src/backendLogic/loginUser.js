import axios from 'axios';

export const loginUserFromBackend=async (email,password)=>{
    const config={
        headers:{
            'Content-type':'application/json'
        }
    }
        const {data}=await axios.post('/api/users/login/',
            {username:email,password:password},
            config
        )
    //console.log(data.data)
    //console.log('backend msg')
    return data;
 }
