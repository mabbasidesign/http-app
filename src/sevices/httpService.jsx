import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError = 
    error.response &&
    error.response >= 400 &&
    error.response < 500;
  
    if(!expectedError){
      console.log("Intescepror called.", error);
      toast.error("an euexpected alert happend.");
    }
  
    return Promise.rejecte(error);
  });

  export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
  }