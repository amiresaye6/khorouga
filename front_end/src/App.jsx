import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<h1>Khorouga</h1>
			<h2>Simple trips programs making and sharing platform.</h2>
			<Login />
		</div>
	);
}

export default App;
