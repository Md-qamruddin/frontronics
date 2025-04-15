import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import Career from './pages/Career';
import FrontPilot from './pages/products/FrontPilot';
import BackPilot from './pages/products/BackPilot';
import AIAssistant from './pages/products/AIAssistant';
import LaunchPad from './pages/products/LaunchPad';
import Toys from './pages/products/Toys';
import { SignIn, SignUp } from './components/auth';
import Navbar from './components/layout/Navbar';
import Footer from './components/Footer';

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/products/frontpilot" element={<FrontPilot />} />
          <Route path="/products/backpilot" element={<BackPilot />} />
          <Route path="/products/ai-assistant" element={<AIAssistant />} />
          <Route path="/products/launchpad" element={<LaunchPad />} />
          <Route path="/products/toys" element={<Toys />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;