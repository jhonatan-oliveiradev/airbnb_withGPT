import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/rooms/:id" element={<Rooms />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
