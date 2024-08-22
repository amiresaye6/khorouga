import React from 'react';
import { Link } from 'react-router-dom';

const NotAllowed = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-2xl font-bold mb-8">
                You are not logged in, please login or signup
            </h1>
            <div className="space-x-4">
                <Link
                    to="/login"
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
                >
                    Register
                </Link>
            </div>
        </div>
    );
};

export default NotAllowed;
