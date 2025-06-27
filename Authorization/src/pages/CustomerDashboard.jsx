const CustomerDashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 px-4 py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Welcome, Customer!</h2>
                {/* Add navigation, orders, etc */}
                <p className="text-gray-600">Use the navigation to view your orders, update your profile, and more.</p>
            </div>
        </div>
    );
};

export default CustomerDashboard;