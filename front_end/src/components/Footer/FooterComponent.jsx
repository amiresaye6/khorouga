import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function FooterComponent() {
    return (
        <div className='relative'>
            <div className="bg-white dark:bg-gray-900">
                <footer>
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-opacity-15">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6 md:mb-0">
                                <Link to="/">
                                    <Logo footer={true} />
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">Pages</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link to="/" className="hover:underline text-accent">Home</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/explore" className="hover:underline text-accent">Explore</Link>
                                        </li>

                                        <li className="mb-4">
                                            <Link to="/create" className="hover:underline text-accent">Create</Link>
                                        </li>

                                        <li>
                                            <Link to="/about" className="hover:underline text-accent">About</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">Follow us</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="https://github.com/amiresaye6" className="hover:underline text-accent">Github</a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/amir-elsayed-/" className="hover:underline text-accent">Linked In</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">Legal</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="/" className="hover:underline text-accent">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="/" className="hover:underline text-accent">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline text-accent">Amir Alsayed™</a>. All Rights Reserved.
                            </span>
                            <div className="flex mt-4 sm:justify-center sm:mt-0">
                                <a href="/" className="text-gray-500 hover:text-primary dark:hover:text-primary ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="/" className="text-gray-500 hover:text-primary dark:hover:text-primary ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                                <a href="/" className="text-gray-500 hover:text-primary dark:hover:text-primary ms-5">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M19 10a8.96 8.96 0 0 0-4.71-8.51c-.27.34-.54.66-.84.96a5.65 5.65 0 0 0-.34.31A6.074 6.074 0 0 0 10.04 2.75a6.062 6.062 0 0 0-5.02 5.48A6.074 6.074 0 0 0 2.55 10a5.48 5.48 0 0 0 2.1 4.46 5.83 5.83 0 0 0 1.08.98A6.155 6.155 0 0 0 10.04 16c1.34 0 2.61-.44 3.69-1.17a5.76 5.76 0 0 0 1.66-.91 5.827 5.827 0 0 0 2.25-3.88A8.956 8.956 0 0 0 19 10Zm-9.91-6.3a2.78 2.78 0 0 1 2.63 1.98c.11.3.16.62.16.94a2.78 2.78 0 0 1-2.63 2.6A2.78 2.78 0 0 1 8.09 7.6a2.78 2.78 0 0 1 2.63-2.9Zm-3.83 4.65a2.61 2.61 0 0 1 0 5.21 2.61 2.61 0 0 1-2.61-2.61 2.61 2.61 0 0 1 2.61-2.61Zm9.95 4.48c0 .68-.13 1.35-.36 1.97a5.751 5.751 0 0 1-1.04 1.63 5.4 5.4 0 0 1-1.31.76 5.978 5.978 0 0 1-2.21.42 5.97 5.97 0 0 1-2.73-.65 5.42 5.42 0 0 1-1.55-1.1 5.778 5.778 0 0 1-1.27-2.12 5.74 5.74 0 0 1-.29-2.24 5.74 5.74 0 0 1 1.02-2.48 5.393 5.393 0 0 1 2.42-2.04 5.635 5.635 0 0 1 2.6-.59c1.32 0 2.58.31 3.68.87a5.968 5.968 0 0 1 2.53 2.29 5.74 5.74 0 0 1 1.1 3.16Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">LinkedIn page</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default FooterComponent;
