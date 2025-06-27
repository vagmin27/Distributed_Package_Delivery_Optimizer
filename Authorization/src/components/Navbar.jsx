// src/components/Navbar.js
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <div className="flex space-x-6">
                <Link 
                    to="/home" 
                    className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                    Home
                </Link>
                <Link 
                    to="/cart" 
                    className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                    Cart
                </Link>
                <Link 
                    to="/orders" 
                    className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                    My Orders
                </Link>
            </div>

            <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 font-medium transition"
            >
                Logout
            </button>
        </nav>
    );
};

export default Navbar;