import { createSlice } from '@reduxjs/toolkit'

export const logginSlice = createSlice({
    name: 'isLoggin',
    initialState: {
        value: false
    },
    reducers: {
        login: (state) => {state.value = true},
        logout: (state) => {state.value = false}
    }
})

export const {login, logout} = logginSlice.actions
export default logginSlice.reducer
