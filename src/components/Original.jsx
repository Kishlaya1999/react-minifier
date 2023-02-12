/** @format */

import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { minify, reset } from "../features/originalSlice";
import { ToastContainer, toast } from "react-toastify";

const Original = () => {
	const originalText = useRef();
	const dispatch = useDispatch();
	// console.log(originalText.current);

	const resetCode = () => {
		const textarea = document.querySelector(".original textarea");
		// console.log(textarea.value);
		textarea.value = "";
		dispatch(reset());
	};

	const minifyCode = () => {
		if (originalText.current.value.length > 0) {
			dispatch(minify(originalText.current.value));
			toast.success("Code minified Successfully", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} else {
			toast.warn("No code available to minify", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	};

	return (
		<div className="original">
			<textarea
				ref={originalText}
				placeholder="Place your code here"
				name=""
				id=""
				cols="90"
				rows="15"></textarea>
			<div className="buttons">
				<button onClick={resetCode}>Reset</button>
				<button onClick={() => minifyCode()}>Minify</button>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
};

export default Original;
