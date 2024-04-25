import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BACKEND_URL} from '@env'
const API_URL = `${BACKEND_URL}/api/inv/purchase`;


// Get All purchases
const getPurchases = async () =>{
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(API_URL , {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
  })
  return response.data
}





const purchaseService = {
  getPurchases,
};

export default purchaseService;
