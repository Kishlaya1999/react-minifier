/** @format */

import { configureStore } from "@reduxjs/toolkit";
import originalReducer from "../features/originalSlice";

export default configureStore({
	reducer: {
		original: originalReducer,
	},
});
