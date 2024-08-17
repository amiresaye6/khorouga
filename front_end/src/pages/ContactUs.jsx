import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        const emailInput = document.getElementById("email-input");
        emailInput.select();
        document.execCommand("copy");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow my-40">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Contact Us</h2>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
                    Reach us via Email
                </h3>
                <div className="flex items-center relative">
                    <input
                        id="email-input"
                        type="text"
                        readOnly
                        value="amiralsayed.work@gmail.com"
                        className="w-full px-4 py-2 pr-10 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-gray-300"
                    />
                    <button
                        onClick={handleCopyEmail}
                        className="absolute right-2 p-1 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                        <AiOutlineCopy />
                    </button>
                </div>
                {emailCopied && (
                    <p className="mt-2 text-green-500 dark:text-green-400">Email copied to clipboard!</p>
                )}
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
                    Give us a Call
                </h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <FiPhone className="mr-2 text-xl" />
                    <span>+20 1555127543</span>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
                    Visit our Office
                </h3>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <FiMapPin className="mr-2 text-xl" />
                    <span>1234 Main Street, Anytown, USA</span>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
