import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Register() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function navigate(url) {
        window.location.href = url;
    }

    const success = () => toast.success('Account Created', {
        // duration: 4000,
        style: {
            background: '#333',
            color: '#fff',
        },
    });
    const fail = () => toast.error('Failed, try again please', {
        // duration: 4000,
        style: {
            background: '#333',
            color: '#fff',
        },
    });

    const fetchUser = async (e) => {
        e.preventDefault(); // Prevent form submission reload
        const response = await fetch('http://localhost:1234/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                email,
                password,
            }),
        });
        if (response.ok) {
            const user = await response.json();
            console.log(user);
            success();
            navigate('/login');
        }
        else {
            fail();
        }
    };

    return (
        <div className="flex flex-col h-dvh justify-center items-center bg-slate-800">
            <div className="bg-white bg-opacity-20 backdrop-blur-md p-10 rounded-lg shadow-lg w-full max-w-md">
                <form className="max-w-sm mx-auto w-full" onSubmit={fetchUser}>
                    <div className="mb-5">
                        <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your user name</label>
                        <input onInput={(event) => setUserName(event.target.value)} type="text" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="amir132" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onInput={(event) => setEmail(event.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input onInput={(event) => setPassword(event.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
