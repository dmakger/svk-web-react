import {createSlice} from '@reduxjs/toolkit';
import {fetchSystemPage} from "./actions";

const systemPageSlice = createSlice({
    name: 'systemPage',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSystemPage.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSystemPage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSystemPage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectSystemPageData = (state) => state.systemPage.data;



export default systemPageSlice.reducer;
