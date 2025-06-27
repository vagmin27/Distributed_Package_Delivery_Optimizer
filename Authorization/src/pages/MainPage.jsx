import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cart from './Cart';
import Home from './Home';
import Orders from './Orders';

const MainPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 text-gray-800">
            <Navbar />
            <main className="p-4">
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="" element={<Navigate to="home" replace />} />
                </Routes>
            </main>
        </div>
    );
};

export default MainPage;