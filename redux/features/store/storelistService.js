import axios from "axios";
import {BACKEND_URL} from '@env'

import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = `${BACKEND_URL}/api/storelist/store`
const API_URL_CAT = `${BACKEND_URL}/api/storelist`
const API_URL_finished = `${BACKEND_URL}/api/storelist/store/finished`
const API_URL_raw = `${BACKEND_URL}/api/storelist/store/raw`
const API_URL_fixed = `${BACKEND_URL}/api/storelist/store/fixed`
const API_URL_use = `${BACKEND_URL}/api/storelist/store/use`
const API_URL_others = `${BACKEND_URL}/api/storelist/store/others`

// Get all storelists
const getStorelists = async () => {
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}




// Get all storelists
const getStorecat = async () => {
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL_CAT , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}
// Get all storelists by type
const getStoreFinished = async () => {
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL_finished , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}


const getStoreRaw = async () => {
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL_raw , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}


const getStoreFixed = async () => {
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL_fixed , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}


const getStoreUse = async () => {
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL_use , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}


const getStoreOthers = async () => {
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(API_URL_others , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}



const storelistService = {
    getStorelists,
    getStorecat,
    getStoreFinished,
    getStoreRaw,
    getStoreFixed,
    getStoreUse,
    getStoreOthers

}

export default storelistService;
