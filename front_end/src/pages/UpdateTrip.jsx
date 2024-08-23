import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FiTrash2, FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

const UpdateTrip = () => {
    const { tripId } = useParams();

    const [formData, setFormData] = useState({
        trip_name: '',
        author: '',
        duration: '',
        description: '',
        cover_image: '',
        places: [{ place_name: '', description: '', location: '', place_cover_image: '' }],
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const response = await fetch(`https://amiralsayed.tech/api/trips/${tripId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.ok) {
                    const trip = await response.json();
                    setFormData(trip);
                } else {
                    toast.error('Failed to load trip data.');
                }
            } catch (error) {
                toast.error('An error occurred while fetching the trip data.');
            }
        };

        fetchTripData();
    }, [tripId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePlaceChange = (index, e) => {
        const { name, value } = e.target;
        const newPlaces = [...formData.places];
        newPlaces[index][name] = value;
        setFormData({ ...formData, places: newPlaces });
    };

    const handleAddPlace = () => {
        setFormData({
            ...formData,
            places: [...formData.places, { place_name: '', description: '', location: '', place_cover_image: '' }],
        });
    };

    const handleRemovePlace = (index) => {
        const newPlaces = [...formData.places];
        newPlaces.splice(index, 1);
        setFormData({ ...formData, places: newPlaces });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`https://amiralsayed.tech/api/trips/${tripId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Trip updated successfully!');
            } else {
                toast.error(`Error: ${result.message}`);
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            className="max-w-2xl mx-auto bg-[#030517] p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Toaster />
            <h2 className="text-3xl font-bold text-[#7a84ef] mb-6 mt-32">Update Trip</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-[#e2e5fb]">Trip Name</label>
                    <input
                        type="text"
                        name="trip_name"
                        value={formData.trip_name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-[#1f1f1f] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[#e2e5fb]">Author</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-[#1f1f1f] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[#e2e5fb]">Duration (in hours)</label>
                    <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-[#1f1f1f] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[#e2e5fb]">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-[#1f1f1f] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-[#e2e5fb]">Cover Image URL</label>
                    <input
                        type="text"
                        name="cover_image"
                        value={formData.cover_image}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-[#1f1f1f] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-[#a945e8] mb-2">Places</h3>
                    {formData.places.map((place, index) => (
                        <motion.div
                            key={index}
                            className="mb-4 p-5 rounded-lg bg-[#1f1f1f] text-[#e2e5fb] relative shadow-xl"
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="absolute top-2 right-2">
                                <FiTrash2
                                    onClick={() => handleRemovePlace(index)}
                                    className="text-red-600 cursor-pointer hover:text-red-800"
                                    title="Remove Place"
                                />
                            </div>
                            <div>
                                <label className="block text-[#e2e5fb]">Place Name</label>
                                <input
                                    type="text"
                                    name="place_name"
                                    value={place.place_name}
                                    onChange={(e) => handlePlaceChange(index, e)}
                                    className="w-full p-3 rounded-lg bg-[#2a2a2a] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[#e2e5fb]">Description</label>
                                <textarea
                                    name="description"
                                    value={place.description}
                                    onChange={(e) => handlePlaceChange(index, e)}
                                    className="w-full p-3 rounded-lg bg-[#2a2a2a] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-[#e2e5fb]">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={place.location}
                                    onChange={(e) => handlePlaceChange(index, e)}
                                    className="w-full p-3 rounded-lg bg-[#2a2a2a] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[#e2e5fb]">Cover Image URL</label>
                                <input
                                    type="text"
                                    name="place_cover_image"
                                    value={place.place_cover_image}
                                    onChange={(e) => handlePlaceChange(index, e)}
                                    className="w-full p-3 rounded-lg bg-[#2a2a2a] text-[#e2e5fb] focus:outline-none focus:ring-2 focus:ring-[#7a84ef]"
                                />
                            </div>
                        </motion.div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddPlace}
                        className="flex items-center justify-center w-full p-3 mt-4 text-[#e2e5fb] bg-[#7a84ef] rounded-lg hover:bg-[#521291] transition-colors"
                    >
                        <FiPlus className="mr-2" />
                        Add Another Place
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full p-3 mt-6 bg-[#521291] text-[#e2e5fb] rounded-lg hover:bg-[#a945e8] transition-colors"
                    disabled={isLoading}
                >
                    {isLoading ? 'Updating...' : 'Update Trip'}
                </button>
            </form>
        </motion.div>
    );
};

export default UpdateTrip;