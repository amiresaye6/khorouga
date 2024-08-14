import React from 'react'
import giga from '../../Assets/giga_slam.jpg'

function TripCard(props) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={props.image || giga} alt="Modern building architecture" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{props.tripName || 'temp trip name'}</div>
                    <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.places || "place1, place2, place3"}</a>
                    <p className="mt-2 text-slate-500">{props.tripDescription || 'trip description with some data bout the trip, also some info in showrt form, not too much a dn short info about what will be done there , so go ahead and do what you want'}</p>
                </div>
            </div>
        </div>
    )
}

export default TripCard;
