import React from "react";
import giga from "../../Assets/giga_slam.jpg";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const TripCard = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <Link
            // href="/" needs to be changed to to >> trip page by id
            className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-none"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={giga}
                alt="Noteworthy technology acquisitions 2021"
            />
            <div className="absolute bottom-4 left-4 flex items-center text-gray-700 dark:text-gray-400">
                <AiFillHeart className="mr-1 text-red-500" /> 0 likes
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so
                    far, in reverse chronological order.
                </p>
            </div>
        </Link>
    );
};

export default TripCard;
