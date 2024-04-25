import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import purchaseService from "./purchaseService";
import Toast from "react-native-toast-message";

const initialState = {
  purchase: null,
  purchases: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get All purchases
export const getPurchases = createAsyncThunk(
  "purchases/getAll",
  async (_, thunkAPI) => {
    try {
      return await purchaseService.getPurchases();
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    CALC_PURCHASE_VALUE(state, action) {
      console.log("Purchase value");
    },
  },
  extraReducers: (builder) => {
    builder

    
      .addCase(getPurchases.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPurchases.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.purchases = action.payload;
      })
      .addCase(getPurchases.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        Toast.show({
          type: "error",
          text1: action.payload,
        });
      });
  },
});

export const { CALC_PURCHASE_VALUE } = purchaseSlice.actions;
export const selectIsLoading = (state) => state.purchase.isLoading;

export default purchaseSlice.reducer;
