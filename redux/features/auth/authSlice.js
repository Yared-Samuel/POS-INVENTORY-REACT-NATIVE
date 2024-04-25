import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
  token: '', // Add a new state property for the token
  name: '',
  role: '',
  user: {
    name: '',
    email: '',
    role: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      const newName = action.payload;
      if (newName !== undefined && newName !== null) {
        AsyncStorage.setItem('name', newName)
          .then(() => {
            state.name = newName;
          })
          .catch(error => {
            console.error('AsyncStorage error:', error);
          });
      } else {
        console.warn('Attempting to store undefined or null name in AsyncStorage');
      }
    },
    SET_TOKEN(state, action) {
      const newToken = action.payload;
      if (newToken !== undefined && newToken !== null) {
        AsyncStorage.setItem('token', newToken)
          .then(() => {
            state.token = newToken;
          })
          .catch(error => {
            console.error('AsyncStorage error:', error);
          });
      } else {
        console.warn('Attempting to store undefined or null token in AsyncStorage');
      }
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.name = profile.name;
      state.user.email = profile.email;
      state.user.role = profile.role;
      state.user.token = profile.token
   
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_TOKEN, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectName = state => state.auth.name;
export const selectToken = state => state.auth.token; // Add a selector for the token
export const selectUser = state => state.auth.user;

export default authSlice.reducer;
