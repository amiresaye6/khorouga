import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Places } from '../CardCarosil/CardCarosil';
import { Card } from '../ui/cards-carousel';

const SearchBar = () => {
    const [tripName, setTripName] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        setResults([]);

        try {
            const response = await fetch(`http://localhost:1234/api/trips/s/search?trip_name=${tripName}`);
            if (!response.ok) {
                throw new Error('Search failed');
            }
            const data = await response.json();
            if (data.numberOfResults === 0) {
                setError('No trips found');
            }
            setResults(data.results);
        } catch (err) {
            setError('Failed to fetch search results');
        }
    };

    const searchResults = results.map(trip => {
        return {
            author: trip.author,
            title: trip.trip_name,
            src: trip.cover_image,
            content: <Places places={trip.places} imgSrc={trip.cover_image} />,
        }
    })
    const cards = searchResults.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="p-6 w-1/2 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 relative">
            <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative w-full">
                    <input
                        type="text"
                        value={tripName}
                        onChange={(e) => setTripName(e.target.value)}
                        placeholder="Search for trips..."
                        className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                        <FiSearch className="text-xl text-primary dark:text-accent" />
                    </button>
                </div>
            </form>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {results.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {cards.map((trip, index) => (
                        trip
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
