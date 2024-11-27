import { configureStore } from "@reduxjs/toolkit";
import sliceData from "./Slice.jsx"
const store = configureStore({
    reducer: {
        myStoreData:sliceData
    }
})
export default store