import { configureStore } from '@reduxjs/toolkit'
import versiculoReducer from './versiculoSlice'

export const store = configureStore({
    reducer:{
        versiculo: versiculoReducer,
    }
})