import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import LoginCard from './components/LoginCard/LoginCard';
import Trips from './pages/Trips';
import Home from './pages/Home';
import { AppleCardsCarouselDemo } from './components/CardCarosil/CardCarosil';
import { AppleCardsCarouselDemo2 } from './components/CardCarosil/CardCarosil2';
// import Sample from './pages/Contact';
// import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Toaster />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginCard />} />
				<Route path="/explore" element={<Trips />} />
				<Route path="/about" element={<AppleCardsCarouselDemo />} />
				<Route path="/create" element={<AppleCardsCarouselDemo2 />} />
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
