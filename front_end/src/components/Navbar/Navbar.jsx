import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import amont from '../../Assets/amongus.png';
import Logo from '../Logo/Logo';
import toast from 'react-hot-toast';
import { FiLogOut } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const location = useLocation(); // Get the current location

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // check if the suer is looged in or not
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      // maybe do'nt have an account or signed out
      const fetchUser = async () => {
        const res = await fetch('https://amiralsayed.tech/api/users/current',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          }
        );

        const user = await res.json();
        if (res.ok) {
          toast.success("lets go find a trip");
          setLoggedIn(true);
        }
        else {
          // toast.error('please log in or signup first');
          setLoggedIn(false);
        }

        return user;
      }
      fetchUser()
    }
  }, [token])

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Explore Trips', to: '/explore' },
    { name: 'Create Your Trip', to: loggedIn ? '/create' : '/not-allawed' },
    { name: 'About Us', to: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-15 shadow-lg backdrop-blur-lg border border-white/20 rounded-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <Logo footer={false} />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${location.pathname === link.to
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    aria-current={location.pathname === link.to ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {
              loggedIn ? <>
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src={amont} alt="" />
                    </button>
                  </div>
                  {dropdownOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-slate-50 hover:text-cyan-100"
                        role="menuitem"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-slate-50 hover:text-cyan-100"
                        role="menuitem"
                      >
                        Settings
                      </Link>
                      <div
                        className="block px-4 py-2 text-sm text-slate-50 hover:text-cyan-100"
                        onClick={() => {
                          toast((t) => (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              className="flex items-center space-x-4 p-4 bg-gray-800 text-white rounded shadow-lg"
                            >
                              <FiLogOut className="text-red-500 w-6 h-6" />
                              <span>Are you sure you want to <b>Sign out</b>?</span>
                              <button
                                onClick={() => {
                                  toast.dismiss(t.id);
                                  localStorage.removeItem('token');
                                  setLoggedIn(false);
                                }}
                                className="ml-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-all duration-200 ease-in-out"
                              >
                                Sign Out
                              </button>
                            </motion.div>
                          ), {
                            duration: 5000, // Duration of 5 seconds
                            style: {
                              background: 'transparent',
                              padding: 0,
                              boxShadow: 'none',
                            },
                          });
                        }}
                      >
                        Sign out
                      </div>
                    </div>
                  )}
                </div>
              </> : <>
                <Link
                  to={'/login'}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${location.pathname === 'login'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  aria-current={location.pathname === 'login' ? 'page' : undefined}
                >
                  {'Login'}
                </Link>
                <Link
                  to={'/register'}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${location.pathname === 'register'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  aria-current={location.pathname === 'register' ? 'page' : undefined}
                >
                  {'Register'}
                </Link>
              </>
            }
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === link.to
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
