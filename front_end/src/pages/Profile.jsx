import React, { useEffect, useState } from 'react';
import PaginationButtonsComponent from '../components/PaginationButtonsComponent/PaginationButtonsComponent';
import toast from 'react-hot-toast';
import { Places } from '../components/CardCarosil/CardCarosil';
import { Card } from '../components/ui/cards-carousel';
import { Link } from 'react-router-dom';

function Profile() {
    const [myTrips, setMyTrips] = useState([]);

    useEffect(() => {
        const fetchMyTrips = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await fetch(
                        'https://amiralsayed.tech/api/trips/me/trips',
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json',
                            },
                        }
                    );

                    if (response.ok) {
                        const data = await response.json();
                        setMyTrips(data);
                    } else {
                        handleSessionExpired();
                    }
                } catch (error) {
                    toast.error("An error occurred while fetching trips. Please try again.");
                }
            } else {
                toast("Please log in to view your trips");
            }
        };

        fetchMyTrips();
    }, []);

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error("Please log in to delete a trip");
            return;
        }

        const confirmed = window.confirm("Are you sure you want to delete this trip?");
        if (!confirmed) return;

        try {
            const response = await fetch(`https://amiralsayed.tech/api/trips/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                toast.success("Trip deleted successfully");
                setMyTrips(myTrips.filter(trip => trip._id !== id));
            } else {
                const result = await response.json();
                toast.error(`Error: ${result.message}`);
            }
        } catch (error) {
            toast.error("An error occurred while deleting the trip. Please try again.");
        }
    };

    const newData = myTrips.map(trip => {
        return {
            author: trip.author,
            title: trip.trip_name,
            src: trip.cover_image,
            favs: trip.rating,
            location: trip.location,
            id: trip._id,
            content: <Places places={trip.places} imgSrc={trip.cover_image} />,
        }
    });

    const cards = newData.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    const handleSessionExpired = () => {
        toast.error("Session expired, please log in again");
        setTimeout(() => {
            window.location.href = '/login';
        }, 3000);
    };

    return (
        <div className="relative w-full h-fit bg-gray-900 text-white">
            <div className="w-full text-center flex-col py-10 md:py-20 flex justify-center items-center">
                <h1 className="text-2xl font-semibold mb-6" style={{ color: '#e2e5fb' }}>
                    My Trips
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 my-5">
                    {cards.map((card, index) => (
                        <div key={`card_${index}`} className="flex flex-col justify-center items-start">
                            <div className="ml-2 mb-2 flex gap-2">
                                <button
                                    className="py-1 px-3 text-sm font-medium focus:outline-none rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 bg-red-600 text-white hover:bg-red-700"
                                    onClick={() => handleDelete(card.id)}
                                >
                                    Delete
                                </button>
                                <Link
                                    to='update'
                                    className="py-1 px-3 text-sm font-medium focus:outline-none rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 bg-blue-600 text-white hover:bg-blue-700"
                                    onClick={() => toast("Edit functionality not implemented yet")}
                                >
                                    Edit
                                </Link>
                            </div>
                            {card}
                        </div>
                    ))}
                </div>
            </div>
            <PaginationButtonsComponent />
        </div>
    );
}

export default Profile;
