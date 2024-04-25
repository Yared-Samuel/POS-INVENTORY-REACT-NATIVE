import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import Toast from 'react-native-toast-message';
import saleService from './saleService';
const initialState = {
    sale: null,
    sales: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}



// Get All Sales

export const getSales = createAsyncThunk(
    "sale/GetAll",
    async(_, thunkApi)=>{
        try {
            return await saleService.getSales()
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message) ||
                error.message || error.toString()
                console.log(message)
                return thunkApi.rejectWithValue(message)
        }
    }
)

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    CALC_SALES_VALUE(state, action){
        console.log('sales value')
  }
},
    extraReducers: (builder) =>{
        builder
     


            // Get all sales

            .addCase(getSales.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(getSales.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.sales = action.payload;
            })
            .addCase(getSales.rejected,(state, action)=>{
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

export const {CALC_SALES_VALUE} = saleSlice.actions
export const selectIsLoading = (state) => state.sale.isLoading

export default saleSlice.reducer