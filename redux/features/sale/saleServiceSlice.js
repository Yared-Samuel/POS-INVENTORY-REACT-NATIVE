import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Toast from 'react-native-toast-message';
import saleServiceService from './saleServiceService';

const initialState = {
    saleService: null,
    saleServices: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

    

    // Get All service
export const getSaleService = createAsyncThunk(
    "saleService/get-All",
    async (_, thunkAPI) => {
        try {
          return await saleServiceService.getSaleService()
        } catch (error) {
          const message = (
            error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()
            console.log(message)
            return thunkAPI.rejectWithValue(message)
        }
    }
  )

const saleServiceSlice = createSlice({
  name: "saleService",
  initialState,
  reducers: {
    CALC_servesale_VALUE(state, action) {
        console.log("serve Sale value")
    }
  },
  extraReducers: (builder)=>{
    builder
        // Get sale service

        .addCase(getSaleService.pending, (state)=>{
            state.isLoading = true
          })
          .addCase(getSaleService.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            console.log(action.payload)
            state.saleServices = action.payload
    
          })
          .addCase(getSaleService.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            Toast.show({
              type: 'error',
              text1: action.payload
            });
    
          })
  }
});

export const {CALC_servesale_VALUE} = saleServiceSlice.actions
export const selectIsLoading = (state) => state.saleService.isLoading

export default saleServiceSlice.reducer