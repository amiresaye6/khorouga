import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import Trips from './pages/Trips';
import Home from './pages/Home';
import FooterComponent from './components/Footer/FooterComponent';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import CreateTrip from './pages/CreateTrip';
import NotAllawed from './pages/NotAllawed';

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
				<Route path="/about" element={<About />} />
				<Route path="/create" element={<CreateTrip />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/not-allawed" element={<NotAllawed />} />
			</Routes>
			<FooterComponent />
		</div>
	);
}

export default App;
