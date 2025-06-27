// src/components/LoginForm.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('customer');

    const handleLogin = (e) => {
        e.preventDefault();

        // TODO: Add real login/auth logic

        if (role === 'customer') navigate('/main/home');
        else if (role === 'delivery') navigate('/delivery/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-green-200 px-4">
            <form 
                onSubmit={handleLogin} 
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Login</h2>

                <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full mb-6 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="customer">Customer</option>
                    <option value="delivery">Delivery Person</option>
                </select>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800 active:text-white transition font-semibold"
                >
                    Login
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;