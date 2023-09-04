import { configureStore } from '@reduxjs/toolkit';
import menu from '../../main/core/wrapper/core/reducers/menu';

export const store = configureStore({
	reducer: {
		menu: menu,
		// Другие срезы могут быть добавлены сюда
	},
});
