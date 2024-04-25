import axios from "axios";
import {BACKEND_URL} from '@env'
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = `${BACKEND_URL}/api/report/store-report`

const getGrandId = async (_id) => {
  const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${API_URL}/${_id}` , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });    
      console.log(response)
    return response.data
}


const grandService = {
    getGrandId,
    
}

export default grandService