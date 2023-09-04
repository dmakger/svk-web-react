// actions/menu.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTOC } from '../../../api/docsAPI';

export const fetchTOC = createAsyncThunk('menu/fetchTOC', async () => {
	// const response = await getTOC();
	// const response = await fetch('http://api.sdelanovkorolyove.ru/api/docs/v1/toc/');
	// const data = await response.json();
	// return data;
	// console.log(response);
	return await getTOC();
});
