/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const originalSlice = createSlice({
	name: "original",
	initialState: {
		value: "",
		originalTextLength: 0,
	},
	reducers: {
		minify: (state, action) => {
			state.originalTextLength = action.payload.length;
			state.value = String(action.payload)
				.replace(/(\r\n|\n|\r)/gm, "")
				.replace(/;.*}/g, ";}")
				.replaceAll("    ", "")
				.replaceAll("  ", "")
				.replace(/<!---.*--->/g, "") //for removing the HTML comments
				.replace(/\/*.* *\//g, ""); //for removing the CSS comments
		},
		reset: (state) => {
			state.value = "";
		},
	},
});

// Action creators are generated for each case reducer function
export const { minify, reset } = originalSlice.actions;

export default originalSlice.reducer;
