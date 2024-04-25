import axios from "axios";
import {BACKEND_URL} from '@env'
const API_URL = `${BACKEND_URL}/api/inv/sale/service`
import AsyncStorage from "@react-native-async-storage/async-storage";

const getSaleService = async () =>{
  const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}


const saleServiceService = {
    getSaleService
}

export default saleServiceService;