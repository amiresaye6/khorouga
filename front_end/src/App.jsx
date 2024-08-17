import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import Trips from './pages/Trips';
import Home from './pages/Home';
import FooterComponent from './components/Footer/FooterComponent';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
	return (
		<div className='App'>
			<Toaster />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/explore" element={<Trips />} />
				<Route path="/about" element={<Home />} />
				<Route path="/create" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
			<FooterComponent />
		</div>
	);
}

export default App;
