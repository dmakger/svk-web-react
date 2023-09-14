// actions/item.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import {getPage, getTOC} from '../../base/core/api/docsAPI';

export const fetchTOC = createAsyncThunk('item/fetchTOC', async () => {
	return await getTOC();
});

export const fetchSystemPage = createAsyncThunk(
	'systemPage/fetchSystemPage',
	async (path) => {
	return await getPage(path);
});
