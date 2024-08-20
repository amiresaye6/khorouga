import React, { useEffect, useState } from 'react';

const SettingsPage = () => {
    const [username, setUsername] = useState('Amir Alsayed'); // Initial username
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('');

    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            const fetchUser = async () => {
                const res = await fetch('http://localhost:1234/api/users/current', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const user = await res.json();
                setUsername(user.userName);
                setEmail(user.email);
            };
            fetchUser();
        }
    }, [token]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSaveChanges = () => {
        alert('Changes saved!');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 pt-24">
            <div className="w-full max-w-4xl px-5">
                {/* Profile Section */}
                <div className="flex items-center mb-8">
                    <img
                        src="https://via.placeholder.com/150" // Larger profile image
                        alt="User Profile"
                        className="w-32 h-32 rounded-full border-2 border-gray-700"
                    />
                    <div className="ml-6 w-full">
                        <label htmlFor="username" className="block text-lg font-semibold mb-2">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 mb-4"
                        />
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 mb-4"
                        />
                        <label htmlFor="password" className="block text-lg font-semibold mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 mb-4"
                        />
                        <button
                            onClick={handleSaveChanges}
                            className="py-2.5 px-5 mt-4 text-sm font-medium focus:outline-none rounded-lg border transition-all duration-300 ease-in-out transform hover:scale-105 focus:z-10 focus:ring-4"
                            style={{
                                color: '#030517',
                                backgroundColor: '#7a84ef',
                                borderColor: '#521291',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#e2e5fb';
                                e.target.style.backgroundColor = '#a945e8';
                                e.target.style.borderColor = '#a945e8';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#030517';
                                e.target.style.backgroundColor = '#7a84ef';
                                e.target.style.borderColor = '#521291';
                            }}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Settings Sections */}
                <div className="space-y-6">
                    {/* Account Settings */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                        <p className="text-gray-400">Manage your account settings and set e-mail preferences.</p>
                    </div>

                    {/* Privacy Settings */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
                        <p className="text-gray-400">Control your privacy settings and activity logs.</p>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                        <p className="text-gray-400">Manage notifications and alerts for your account.</p>
                    </div>

                    {/* Security Settings */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
                        <p className="text-gray-400">Manage your security options such as passwords and two-factor authentication.</p>
                    </div>

                    {/* Connected Accounts */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Connected Accounts</h2>
                        <p className="text-gray-400">Manage the apps and services connected to your account.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
