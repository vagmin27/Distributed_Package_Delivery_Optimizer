const DeliveryDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('role');
        navigate('/');
    };

    const pendingOrders = [
        { id: 1, customer: 'Vagmin', address: 'Sector 5, Hyderbad' },
        { id: 2, customer: 'Harini', address: 'MG Road, Vizag' },
        { id: 2, customer: 'Lahitha', address: ' Rajamahendravaram' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-100 p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Delivery Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>

            {/* Pending Orders Section */}
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Pending Orders</h2>

            <ul className="space-y-4">
                {pendingOrders.map((order) => (
                    <li
                        key={order.id}
                        className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md flex justify-between items-center border border-white/40"
                    >
                        <div>
                            <p className="font-medium text-gray-800">
                                Order #{order.id} for {order.customer}
                            </p>
                            <p className="text-sm text-gray-500">{order.address}</p>
                        </div>
                        <button
                            onClick={() => navigate(`/track/${order.id}`)}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Track Order
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeliveryDashboard;