// src/pages/AuthChoicePage.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChoicePage = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('customer');

    const handleNavigation = (type) => {
        navigate(`/${type}/${role}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-green-400 relative">
            {/* Overlay for subtle shading and clarity */}
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-md border border-white/30 text-white">

                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center mb-6">Welcome</h2>

                    {/* Role Selector */}
                    <label className="block mb-2 text-sm font-medium text-white">Select Your Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full mb-6 px-4 py-2 rounded-lg text-black bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="customer">Customer</option>
                        <option value="delivery">Delivery Person</option>
                    </select>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button
                            onClick={() => handleNavigation('login')}
                            className="w-1/2 py-2 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:text-white transition font-semibold"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => handleNavigation('signup')}
                            className="w-1/2 py-2 rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 active:text-white transition font-semibold"
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthChoicePage;