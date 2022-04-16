import axios  from 'axios';

const DATA_TRACKER_API_URL= 'http://localhost:8080/api/v1/state';


export const  UserService = async () =>{
    
      return  axios.get(DATA_TRACKER_API_URL);
    }

    export const fetchStates = async (state) => {
      try {
        return await axios.get(`${DATA_TRACKER_API_URL}?state=${state}`);
    
        //return state;
      } catch (error) {
        return error;
      }
    };



//export default new UserService();


