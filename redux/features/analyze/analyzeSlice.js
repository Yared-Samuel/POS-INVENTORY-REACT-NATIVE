import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import analyzeService from "./analyzeService"
import Toast from 'react-native-toast-message';


const initialState = {
    analyze: null,
    analyzes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getAnalyze = createAsyncThunk(
    "getAnalyze/getByDay",
    async(selectedValue, thunkAPI) => {
        try {
           
           
            responce = await analyzeService.getAnalyze(selectedValue)
            
            return responce
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message) ||
                error.message || error.toString()
                console.log(message)
                return thunkAPI.rejectWithValue(message)
        }
    }
)

export const analyzeSlice = createSlice({
  name: "analyze",
  initialState,
  reducers: {
    CALC_ANALYZE_DAILY(state, action){
        console.log("Daily analyze")
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(getAnalyze.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getAnalyze.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;            
            state.analyzes = action.payload
        })
        .addCase(getAnalyze.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            
            state.message = action.payload;
            Toast.show({
                type: 'error',
                text1: action.payload
              });
        })
  }
});

export const {CALC_ANALYZE_DAILY} = analyzeSlice.actions
export const selectIsLoading = (state)=>state.analyze.isLoading

export default analyzeSlice.reducer

