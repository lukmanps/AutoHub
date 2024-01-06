import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null
        },
        loginFailed: (state, action) => {
            state.error = action.payload
            state.loading = false;
        },

        updateSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        }

    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    updateSuccess
} = userSlice.actions;

export default userSlice.reducer;    