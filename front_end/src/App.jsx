import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import LoginCard from './components/LoginCard/LoginCard';
import Trips from './pages/Trips';
import Home from './pages/Home';
import FooterComponent from './components/Footer/FooterComponent';

function App() {
	return (
		<div className='App'>
			<Toaster />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginCard />} />
				<Route path="/explore" element={<Trips />} />
				<Route path="/about" element={<Home />} />
				<Route path="/create" element={<Home />} />
			</Routes>
			<FooterComponent />
		</div>
	);
}

export default App;
