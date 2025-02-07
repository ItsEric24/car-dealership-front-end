import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetails from './pages/CarDetails';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <Router>
      <HelmetProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;