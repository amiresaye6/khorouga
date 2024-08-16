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
                    <Link to="/explore" >Explore Trips</Link>
                    <Link href="/">Start Planning.</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
