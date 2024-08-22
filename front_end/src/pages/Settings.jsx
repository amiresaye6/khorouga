import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SettingsPage = () => {
    const [username, setUsername] = useState('Amir Alsayed');
    const [email, setEmail] = useState('amir@gmail.com');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [changed, setChanged] = useState(false);

    const token = localStorage.getItem('token');

    const updateUser = async (userId) => {
        try {
            const res = await fetch(`https://amiralsayed.tech/api/users/update/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userName: username,
                    email,
                    ...(password && { password })
                })
            });

            if (res.ok) {
                setChanged(true);
                toast.success('Changes saved!');
            } else {
                toast.error('Failed to save changes.');
            }
        } catch (error) {
            toast.error('An error occurred.');
        }
    };

    const deleteUser = async () => {
        try {
            const res = await fetch(`https://amiralsayed.tech/api/users/delete/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (res.ok) {
                toast.success('Account deleted successfully.');
                localStorage.removeItem('token');
            } else {
                toast.error('Failed to delete account.');
            }
        } catch (error) {
            toast.error('An error occurred while deleting your account.');
        }
    };

    const confirmDelete = () => {
        toast((t) => (
            <span>
                Are you sure you want to delete your account?
                <button
                    onClick={() => {
                        deleteUser();
                        toast.dismiss(t.id);
                    }}
                    className="ml-3 py-1 px-3 bg-red-600 text-white rounded-lg"
                >
                    Confirm
                </button>
            </span>
        ), {
            duration: 5000,
        });
    };

    useEffect(() => {
        if (token) {
            const fetchUser = async () => {
                try {
                    const res = await fetch('https://amiralsayed.tech/api/users/current', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (res.ok) {
                        const user = await res.json();
                        setUserId(user.id);
                        setUsername(user.userName);
                        setEmail(user.email);
                    } else {
                        toast.error('Failed to fetch user data.');
                    }
                } catch (error) {
                    toast.error('An error occurred while fetching user data.');
                }
            };
            fetchUser();
        } else {
            toast.error('No valid token found.');
        }
    }, [token, changed]);

    const handleSaveChanges = () => {
        if (userId) {
            updateUser(userId);
        } else {
            toast.error('User ID not found.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 pt-24">
            <div className="w-full max-w-4xl px-5">
                <div className="flex items-center mb-8">
                    <img
                        src="https://via.placeholder.com/150"
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
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 mb-4"
                        />
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 mb-4"
                        />
                        <label htmlFor="password" className="block text-lg font-semibold mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 mb-4"
                        />
                        <div className="flex justify-between items-center">
                            <button
                                onClick={handleSaveChanges}
                                className="py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg border transition-all duration-300 ease-in-out transform hover:scale-105 focus:z-10 focus:ring-4"
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
                            <button
                                onClick={confirmDelete}
                                className="py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg border border-red-600 text-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:z-10 focus:ring-4"
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#fff';
                                    e.target.style.backgroundColor = '#ff4d4d';
                                    e.target.style.borderColor = '#ff4d4d';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#ff4d4d';
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.borderColor = '#ff4d4d';
                                }}
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                        <p className="text-gray-400">Manage your account settings and set e-mail preferences.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
                        <p className="text-gray-400">Control your privacy settings and activity logs.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                        <p className="text-gray-400">Manage notifications and alerts for your account.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
                        <p className="text-gray-400">Manage your security options such as passwords and two-factor authentication.</p>
                    </div>

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
