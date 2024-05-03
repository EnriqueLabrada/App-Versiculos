import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id:0,
    cita: '',
    texto:'',
}

export const versiculoSlice = createSlice({
    name:'versiculo',
    initialState,
    reducers: {
        changeVersiculo:(state, action) => {
            const {id, cita, texto} = action.payload
            state.id = id
            state.cita = cita
            state.texto = texto
        }
    }
})

export const {changeVersiculo} = versiculoSlice.actions
export default versiculoSlice.reducer