/** @format */

import fire from "../assets/fire.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="website-logo">
				<p>Mini</p> <img src={fire} className="fire-img" />
			</div>
		</div>
	);
};

export default Navbar;
