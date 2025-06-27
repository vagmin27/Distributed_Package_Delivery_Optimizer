// src/pages/TrackDelivery.js
import { useParams } from 'react-router-dom';

const TrackDelivery = () => {
    const { orderId } = useParams();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-200 to-teal-100 p-6 flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                    Tracking Order #{orderId}
                </h2>

                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                    {/* Placeholder for map */}
                    Google Map placeholder
                </div>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Real-time delivery updates coming soon!
                </p>
            </div>
        </div>
    );
};

export default TrackDelivery;