import axios from 'axios';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import {BACKEND_URL} from '@env'
const BACKEND_URL_full = `${BACKEND_URL}/api/users/login`;

//Login Users
export const loginUser = async (userData) => {
  
    try {
        
        const response = await axios.post(`${BACKEND_URL_full}`, userData, {withCredentials: true})
        
        if(response.statusText === "OK") {
            Toast.show({
                        type: 'success',
                        text1: 'Logged in Right'
                    });
        }
        return response.data
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()

            Toast.show({
                type: 'error',
                text1: message
              });
    }    
}
// Logout user
export const logoutUser = async () => {
    try {
        await axios.get(`${BACKEND_URL}/api/users/logout`)
        
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()

            Toast.show({
                type: 'error',
                text1: message
              });
    }
}

const authService = {
    loginUser,
    logoutUser
}

export default authService;



