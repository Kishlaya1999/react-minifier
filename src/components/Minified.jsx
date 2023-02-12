/** @format */

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Minified = () => {
	const minifiedText = useSelector((e) => e.original);

	const copyMinifiedText = () => {
		const input = document.createElement("input");
		input.setAttribute("type", "text");
		input.setAttribute("id", "temporaryInput");
		input.value = minifiedText.value;

		const minifiedContainer = document.querySelector(".minified-container");
		minifiedContainer.appendChild(input);

		const temporaryInput = document.getElementById("temporaryInput");
		temporaryInput.select();
		document.execCommand("copy");
		temporaryInput.remove();
	};

	const notify = (e) => {
		// let htmlCode =
		// 	e.target.parentElement.parentElement.parentElement.children[1].children[0].innerHTML;
		if (minifiedText.value.length != 0) {
			copyMinifiedText();

			toast.success("Copied To Clipboard", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			toast.success(
				`${
					minifiedText.originalTextLength - minifiedText.value.length
				} characters reduced`,
				{
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				}
			);
		} else {
			toast.warn("No text available to copy", {
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
		<div>
			<div className="minified-code-top-bar">
				<p>Minified Code</p>
				<div onClick={notify}>
					<i className="fa-solid fa-clipboard"></i>
					<span>Copy Code</span>
				</div>
			</div>
			<div className="minified-container">
				<div className="minified-code">{minifiedText.value}</div>
				{/* {console.log(minifiedText.value.length)} */}
				{/* <div className="icon-container" onClick={copyMinifiedText}>
					<i className="fa-solid fa-clipboard"></i>
				</div> */}
				{/* <div className="alert">
					<span>
						Before minifying: {minifiedText.originalTextLength} characters{" "}
					</span>
					<br />
					<span>After minifying: {minifiedText.value.length} characters</span>
					<br />
					<span></span>
				</div> */}
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

export default Minified;
