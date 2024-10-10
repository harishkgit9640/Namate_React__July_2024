import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cardSlice';

const cardStore = configureStore({
    reducer: {
        cart: cartReducer
        // user : userReducer
    }
})

export default cardStore;