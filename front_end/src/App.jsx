import { Routes, Route } from 'react-router-dom'
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import Login from "./pages/Login";
import { Toaster } from 'react-hot-toast';
import TripCard from './components/TripCard/TripCard';
import LoginCard from './components/LoginCard/LoginCard';

function App() {
	return (
		<div className='App'>
			<Toaster />
			<Navbar />
			<Routes>
				<Route path="/botato" element={<Hero />} />
				<Route path="/login" element={<LoginCard />} />
				{/* <Route path="/any" element={<Hero />} /> */}
				{/* <Route path="/any" element={<Hero />} /> */}
				{/* <Route path="/any" element={<Hero />} /> */}
			</Routes>
			<TripCard />
			<TripCard />
			<TripCard />
			<TripCard />
			<TripCard />
			<TripCard />
			<TripCard />
		</div>
	);
}

export default App;
