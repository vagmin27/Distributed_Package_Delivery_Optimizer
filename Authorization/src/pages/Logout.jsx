// src/pages/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear(); // Clears role and session
        setTimeout(() => {
            navigate('/'); // Redirect to role selection
        }, 1000); // Optional delay for UX
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 to-green-200">
            <p className="text-lg font-medium text-emerald-800 animate-pulse">
                Logging you out...
            </p>
        </div>
    );
};

export default Logout;