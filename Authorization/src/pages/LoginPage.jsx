import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const { role } = useParams(); // 'customer' or 'delivery'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        localStorage.setItem('role', role);

        if (role === 'customer') {
            navigate('/home');
        } else {
            navigate('/delivery/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-emerald-100 px-4">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-sm border border-white/30">
                <h2 className="text-2xl font-bold text-center text-emerald-800 mb-6">
                    Login as {role === 'customer' ? 'Customer' : 'Delivery Person'}
                </h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 active:bg-emerald-800 active:text-white transition font-semibold"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;