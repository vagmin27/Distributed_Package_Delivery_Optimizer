// src/components/SignupForm.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('customer');

    const handleSignup = (e) => {
        e.preventDefault();

        // TODO: Add real signup logic

        if (role === 'customer') {
            navigate('/main/home');
        } else if (role === 'delivery') {
            navigate('/delivery/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 px-4">
            <form 
                onSubmit={handleSignup} 
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Signup</h2>

                <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

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
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 active:bg-green-800 active:text-white transition font-semibold"
                >
                    Signup
                </button>

                <p className="mt-4 text-center text-sm text-gray-700">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-100 hover:underline font-medium">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignupForm;