import React, { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';

const SettingsPage = () => {
    const [username, setUsername] = useState('Amir Alsayed');
    const [email, setEmail] = useState('amir@gmail.com');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [changed, setChanged] = useState(false);
    const [avatar, setAvatar] = useState('');
    const fileInputRef = useRef(null);

    const token = localStorage.getItem('token');

    const updateUser = async (userId) => {
        try {
            const res = await fetch(`http://localhost:1234/api/users/update/${userId}`, {
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
            const res = await fetch(`http://localhost:1234/api/users/delete/${userId}`, {
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
                    const res = await fetch('http://localhost:1234/api/users/current', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (res.ok) {
                        const user = await res.json();
                        console.log(user)
                        setUserId(user.id);
                        setUsername(user.userName);
                        setEmail(user.email);
                        setAvatar(user.avatar);
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

    const handleClick = () => {
        alert('Change profile picture');
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('avatar', file);

            try {
                // First, upload the avatar
                const res = await fetch(`http://localhost:1234/api/users/upload-avatar/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    body: formData,
                });

                if (res.ok) {
                    const data = await res.json();
                    const avatar = data.user.avatar;
                    setAvatar(avatar);
                    toast.success('Profile picture updated!');

                    // Then, update the user's profile with the new avatar URL
                    try {
                        const res2 = await fetch(`http://localhost:1234/api/users/update/${userId}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                            },
                            body: JSON.stringify({
                                avatar,
                            })
                        });

                        if (res2.ok) {
                            setChanged(true);
                            toast.success('Changes saved!');
                        } else {
                            toast.error('Failed to save changes.');
                        }
                    } catch (error) {
                        toast.error('An error occurred while saving changes.');
                    }
                } else {
                    toast.error('Failed to upload profile picture.');
                }
            } catch (error) {
                toast.error('An error occurred during the upload.');
            }
        }
    };


    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 pt-24">
            <div className="w-full max-w-4xl px-5">
                <div className="flex items-center mb-8">
                    <img
                        // src={avatar}
                        // src={avatar ? `http://localhost:1234/uploads/${avatar}` : "https://mir-s3-cdn-cf.behance.net/projects/404/19aa7e103324129.Y3JvcCwzMTg5LDI0OTQsMCwxMTc2.jpg"}
                        src={avatar ? avatar : "https://mir-s3-cdn-cf.behance.net/projects/404/19aa7e103324129.Y3JvcCwzMTg5LDI0OTQsMCwxMTc2.jpg"}
                        // src={avatar ? avatar : "https://via.placeholder.com/150"}
                        alt="User Profile"
                        className="w-32 h-32 rounded-full border-2 border-gray-700"
                        onClick={handleClick}
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/png, image/jpg, image/jpeg"
                        onChange={handleFileChange}
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
                    {/* The rest of your settings components */}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
