import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'mydata',
    initialState:{
        value:[]
    },
    reducers:{
        addCartData:(state,action)=>{
           var productData = action.payload;
           state.value = [...state.value,{productData,qty:1}];
        },

        incrementQty:(state,action)=>{
            var pid = action.payload;
           state.value = state.value.map(obj=>obj.productData.id == pid ?{...obj,qty:obj.qty+1} : obj);
 
        },
        decrementQty:(state,action)=>{
            var pid = action.payload;
            state.value = state.value.map(obj=>obj.productData.id == pid ?{...obj,qty:obj.qty > 0 ? obj.qty-1 : obj.qty==1} :obj);
        },
        removeProduct:(state,action)=>{
            var pid = action.payload;
            state.value = state.value.filter(obj=>obj.productData.id != pid)
        }
    }
})
export const {addCartData,incrementQty,decrementQty,removeProduct} = slice.actions;
export default slice.reducer;