import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import allReducer from './modules/all'
const store = configureStore({
    reducer:{
        home:homeReducer,
        all:allReducer
    }
})
export default store