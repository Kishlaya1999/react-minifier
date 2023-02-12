/** @format */

import React from "react";
import Minified from "./Minified";
import Original from "./Original";

const MinifierContainer = () => {
	return (
		<div className="MinifierContainer">
			<Original />
			<Minified />
		</div>
	);
};

export default MinifierContainer;
