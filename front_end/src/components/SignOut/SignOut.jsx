import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiLogOut } from 'react-icons/fi'; // Importing an icon
import { motion } from 'framer-motion'; // For animations

const SignOutWarning = ({ setLoggedIn }) => {
    const handleSignOut = (t) => {
        toast.dismiss(t.id);
        localStorage.removeItem('token');
        setLoggedIn(false);
    };

    const showSignOutWarning = () => {
        
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <button
                onClick={showSignOutWarning}
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200 ease-in-out"
            >
                Show Sign Out Warning
            </button>
            <Toaster position="top-center" />
        </div>
    );
};

export default SignOutWarning;
