import axios from "axios";
import {BACKEND_URL} from '@env'
const API_URL = `${BACKEND_URL}/api/report/store-report`
import AsyncStorage from "@react-native-async-storage/async-storage";
const DAILY_SALE = `${BACKEND_URL}/api/report/sale-daily`
const DAILY_PURCHASE = `${BACKEND_URL}/api/report/purchase-daily`
const DAILY_SERVE = `${BACKEND_URL}/api/report/serve-daily`
const STORE_DAILY_SALE = `${BACKEND_URL}/api/report/store-sale-daily`
const STORE_BALANCE = `${BACKEND_URL}/api/report/probalance`
const INV_BALANCE = `${BACKEND_URL}/api/report/mainStoreBalance`
const CASH_BALANCE = `${BACKEND_URL}/api/report/cashBalance`


const getDailySale = async ()=>{
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(DAILY_SALE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    
    return response.data
}

const getDailyServe = async ()=>{
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(DAILY_SERVE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}




const getDailyPurchase = async (formData)=>{
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(DAILY_PURCHASE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}



const getStoreDailySale = async (formData)=>{
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(STORE_DAILY_SALE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}

const getStoreBalance = async (formData)=>{
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(STORE_BALANCE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}

const getInvBalance = async (formData)=>{
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(INV_BALANCE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}
const getCashBalances = async (formData)=>{
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(CASH_BALANCE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}
const getCashBalancesfake = async (formData)=>{
const token = await AsyncStorage.getItem("token");

    const response = await axios.get(CASH_BALANCE , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
    return response.data
}



const reportService = {
    getDailySale,
    getDailyServe,
    getDailyPurchase,
    getStoreDailySale,
    getStoreBalance,
    getInvBalance,
    getCashBalances

}

export default reportService;