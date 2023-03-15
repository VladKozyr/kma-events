import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'selectedMenu',
    initialState: {
        value: '0'
    },
    reducers: {
        select: (state, key) => {state.value = key.payload}
    }
})

export const {select} = menuSlice.actions
export default menuSlice.reducer
