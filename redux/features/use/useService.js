import axios from "axios";
import {BACKEND_URL} from '@env'
const API_URL = `${BACKEND_URL}/api/inv/use`
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUse = async () => {
  const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}

const useSercive = {
    getUse
}

export default useSercive