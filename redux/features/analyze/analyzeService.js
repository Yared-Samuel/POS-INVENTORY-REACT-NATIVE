import axios from "axios";
import {BACKEND_URL} from '@env'
import AsyncStorage from "@react-native-async-storage/async-storage";



const getAnalyze = async (storeId)=>{
const STORE_ANALYZE = `${BACKEND_URL}/api/analyze/storeId/${storeId}`
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(STORE_ANALYZE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}

const analyzeService = {
    getAnalyze
}

export default analyzeService;