import { createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
    name: 'customers',
    initialState: [],
    reducers:{
        addCustomer: (state,action) =>{
            state.push(action.payload)
        },

        deleteCustomer: (state, action) => {
            const customerId = action.payload;
            const updatedState = state.filter(customer => customer.id !== customerId);
            console.log('Updated State:', updatedState);
            return updatedState;
          },
    }
})



export const {addCustomer,deleteCustomer} = customerSlice.actions;
export default customerSlice.reducer;