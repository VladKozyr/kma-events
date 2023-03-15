import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        toView: false,
        selectedUser: null
    },
    reducers: {
        toView: (state, user) => {
            state.toView = true
            state.selectedUser = user
        },
        back: (state) => {
            state.toView = false
            state.selectedUser = null
        }
    }
})

export const {toView, back} = usersSlice.actions
export default usersSlice.reducer
