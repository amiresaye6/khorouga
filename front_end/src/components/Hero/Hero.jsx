import React from 'react'
import Ripple from '../Ribble/Ribble';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='overflow-hidden w-full'>
            <div className='overflow-hidden flex flex-col justify-center items-center my-20  bg-white bg-opacity-15 h-lvh'>
            <Ripple />
                <h1 className=' w-1/2 text-center text-7xl text-neutral-100'>Discover Your Next Adventure with Khotoga.</h1>
                <div className='py-20'>
                    <Link to="/explore" >Explore Trips</Link>
                    <Link href="/">Start Planning.</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
