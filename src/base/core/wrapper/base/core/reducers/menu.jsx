import { createSlice } from '@reduxjs/toolkit';
import { fetchTOC } from '../../../../../../core/reducer/actions';

const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		data: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTOC.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchTOC.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchTOC.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default menuSlice.reducer;
