import React from 'react';
import { Link } from 'react-router-dom';
import Meteors from '../Meteors/Meteors';

function Hero() {
    return (
        <div
            className='relative overflow-hidden flex flex-col justify-center items-center h-screen'
            style={{
                backgroundColor: '#030517',
                fontFamily: "'Poppins', sans-serif",
                backgroundImage: 'linear-gradient(180deg, rgba(3, 5, 23, 0.9) 0%, rgba(3, 5, 23, 0.7) 100%)',
            }}
        >
            {/* Meteors Component Positioned Absolutely Behind the Hero Content */}
            <Meteors number={20} />

            <h1
                className='relative w-4/5 text-center text-7xl'
                style={{
                    color: '#e2e5fb',
                    paddingTop: '150px',
                    textShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                }}
            >
                Discover Your <span style={{ color: '#a945e8' }}>Next Adventure</span> with Khotoga.
            </h1>

            <div className='relative py-20'>
                <Link
                    to="/explore"
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border transition-all duration-300 ease-in-out transform hover:scale-105 focus:z-10 focus:ring-4"
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
                    Explore Trips
                </Link>

                <Link
                    to="/create"
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border transition-all duration-300 ease-in-out transform hover:scale-105 focus:z-10 focus:ring-4"
                    style={{
                        color: '#030517',
                        backgroundColor: '#521291',
                        borderColor: '#7a84ef',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = '#e2e5fb';
                        e.target.style.backgroundColor = '#a945e8';
                        e.target.style.borderColor = '#a945e8';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = '#030517';
                        e.target.style.backgroundColor = '#521291';
                        e.target.style.borderColor = '#7a84ef';
                    }}
                >
                    Start Planning
                </Link>
            </div>
        </div>
    );
}

export default Hero;
