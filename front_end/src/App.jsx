import Navbar from "./components/Navbar/Navbar";
// import Login from "./pages/Login";
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<div className='App'>
			<Toaster />
			<Navbar />
		</div>
	);
}

export default App;
