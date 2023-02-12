/** @format */

import "./App.css";
import MinifierContainer from "./components/MinifierContainer";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="MinifierComponent">
				<MinifierContainer />
			</div>
		</div>
	);
}

export default App;
