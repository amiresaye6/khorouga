import React, { useState } from 'react';

const CreateTripForm = () => {
    const [tripName, setTripName] = useState('');
    const [author, setAuthor] = useState('');
    const [duration, setDuration] = useState(0);
    const [description, setDescription] = useState('');
    const [numberOfPlaces, setNumberOfPlaces] = useState(0);
    const [placeName, setPlaceName] = useState('');
    const [placeDescription, setPlaceDescription] = useState('');
    const [placeLocation, setPlaceLocation] = useState('');
    const [rating, setRating] = useState(0);
    const [coverImage, setCoverImage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tripData = {
            trip_name: tripName,
            author,
            duration,
            description,
            number_of_places: numberOfPlaces,
            places: {
                place_name: placeName,
                description: placeDescription,
                meta: {
                    votes: 0,
                    favs: 0
                },
                location: placeLocation
            },
            rating,
            meta: {
                votes: 0,
                favs: 0
            },
            cover_image: coverImage
        };

        try {
            const response = await fetch('https://your-api-url/trips', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_JWT_TOKEN' // Include your JWT token if needed
                },
                body: JSON.stringify(tripData)
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setError(null);
                console.log('Trip created successfully:', data);
            } else {
                setSuccess(false);
                setError(data.message || 'Failed to create trip');
                console.error('Error creating trip:', data);
            }
        } catch (err) {
            setSuccess(false);
            setError('Failed to create trip');
            console.error('Error:', err);
        }
    };

    return (
        <div>
            <h2>Create a New Trip</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Trip created successfully!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Trip Name:</label>
                    <input
                        type="text"
                        value={tripName}
                        onChange={(e) => setTripName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Duration:</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Number of Places:</label>
                    <input
                        type="number"
                        value={numberOfPlaces}
                        onChange={(e) => setNumberOfPlaces(parseInt(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label>Place Name:</label>
                    <input
                        type="text"
                        value={placeName}
                        onChange={(e) => setPlaceName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Place Description:</label>
                    <textarea
                        value={placeDescription}
                        onChange={(e) => setPlaceDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Place Location:</label>
                    <input
                        type="text"
                        value={placeLocation}
                        onChange={(e) => setPlaceLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        step="0.1"
                        value={rating}
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label>Cover Image URL:</label>
                    <input
                        type="text"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                    />
                </div>
                <button type="submit">Create Trip</button>
            </form>
        </div>
    );
};

export default CreateTripForm;
