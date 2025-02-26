import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import ListingsPage from './pages/ListingsPage';
// import BookingPage from './pages/BookingPage';
import VendorDashboard from './pages/VendorDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/listings" element={<ListingsPage />} />
        <Route path="/booking" element={<BookingPage />} /> */}
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
