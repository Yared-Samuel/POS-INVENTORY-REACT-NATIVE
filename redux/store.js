import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/features/auth/authSlice"
import reportReducer from "./features/reports/reportSlice"
import analyzeReducer from "./features/analyze/analyzeSlice"
import storeReducer from "./features/store/storelistSlice"
import purchaseReducer from "./features/purchase/purchaseSlice"
import deliverReducer from "./features/delivery/deliverSlice"
import saleRaducer from "./features/sale/saleSlice"
import serviceReducer from "./features/sale/saleServiceSlice"
import useReducer from "./features/use/useSlice"
import grandSlice from "./features/grandReport/grandSlice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        report: reportReducer,
        analyze: analyzeReducer,
        store: storeReducer,
        purchase: purchaseReducer,
        deliver: deliverReducer,
        sale: saleRaducer,
        service: serviceReducer,
        use: useReducer,
        grand: grandSlice
    }

})

export default store;