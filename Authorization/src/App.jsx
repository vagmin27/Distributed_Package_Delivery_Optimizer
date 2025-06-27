// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import AuthChoicePage from './pages/AuthChoicePage.jsx';
import Cart from './pages/Cart.jsx';
import DeliveryDashboard from './pages/DeliveryDashboard.jsx';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Logout from './pages/Logout.jsx';
import MyOrders from './pages/Orders.jsx';
import SignupPage from './pages/SignupPage.jsx';
import TrackDelivery from './pages/TrackDelivery.jsx';

// Layout for customer pages that includes a navbar
const CustomerLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="p-4">{children}</main>
  </>
);

function App() {
  return (
    <Router>
      <Routes>

        {/* Authentication & Entry */}
        <Route path="/" element={<AuthChoicePage />} />
        <Route path="/login/:role" element={<LoginPage />} />
        <Route path="/signup/:role" element={<SignupPage />} />
        <Route path="/logout" element={<Logout />} />

        {/* Customer Pages */}
        <Route path="/home" element={<CustomerLayout><Home /></CustomerLayout>} />
        <Route path="/cart" element={<CustomerLayout><Cart /></CustomerLayout>} />
        <Route path="/orders" element={<CustomerLayout><MyOrders /></CustomerLayout>} />

        {/* Delivery Dashboard */}
        <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />

        {/* Shared Route */}
        <Route path="/track/:orderId" element={<TrackDelivery />} />
        
      </Routes>
    </Router>
  );
}

export default App;