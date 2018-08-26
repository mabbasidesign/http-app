import axios from 'axios';

axios.interceptors.response.use(null, error => {
    const expectedError = 
    error.response &&
    error.response >= 400 &&
    error.response < 500;
  
    if(!expectedError){
      console.log("Intescepror called.", error);
      alert("an euexpected alert happend.");
    }
  
    return Promise.rejecte(error);
  });

  export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
  }