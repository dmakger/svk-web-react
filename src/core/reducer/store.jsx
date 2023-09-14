import { configureStore } from '@reduxjs/toolkit';
import menu from '../../base/core/wrapper/base/core/reducers/menu';
import screenReducer from "./screenReducer";
import tocReducer from "./tocReducer";
import systemPageReducer from "./systemPageReducer";

export const store = configureStore({
	reducer: {
		menu: menu,
		screen: screenReducer,
		toc: tocReducer,
		systemPage: systemPageReducer,
	},
});
