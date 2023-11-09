import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './custumerSlice';



const store = configureStore({
    
    reducer:{
        customers: customerReducer,
    },
});


export default store;