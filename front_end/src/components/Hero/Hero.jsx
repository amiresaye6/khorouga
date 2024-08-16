import React from 'react'
import { Link } from 'react-router-dom';
import Meteors from '../Meteors/Meteors';

function Hero() {
    return (
        <div>
            <div className='overflow-hidden flex flex-col justify-center items-center my-0  bg-white bg-opacity-15 h-lvh'>
                <Meteors />
                <h1 className=' w-4/5 text-center text-7xl text-neutral-100'>Discover Your Next Adventure with Khotoga.</h1>
                <div className='py-20'>
                    <Link to="/explore" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >Explore Trips</Link>
                    <Link to="/create">Start Planning.</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
