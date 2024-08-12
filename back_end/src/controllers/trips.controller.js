const Trip = require('../models/trip.model.js');

const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.status(200).json(trips)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await Trip.findById(id)

        res.status(200).json(trip)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTripsByAuthor = async (req, res) => {
    try {
        const { author } = req.params;
        const trips = await Trip.find({ author });
        res.status(200).json(trips)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// private endpoints >> need token
const getMyTrips = async (req, res) => {
    try {
        const trips = await Trip.find({ user_id: req.user.id });
        res.status(200).json(trips || { messatge: 'empity result' })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createTrip = async (req, res) => {
    try {
        const trip = await Trip.create({ ...req.body, user_id: req.user.id });
        res.status(200).json(trip)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update a Trip
const updateTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await Trip.findByIdAndUpdate(id, req.body);

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        else if (trip.user_id.toString() !== req.user.id) {
            return res.status(403).json({ message: "user dont have permession" });
        }
        const updatedTrip = await Trip.findById(id);
        res.status(200).json(updatedTrip)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete a Trip
const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params
        const trip = await Trip.findById(id);

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        else if (trip.user_id.toString() !== req.user.id) {
            return res.status(403).json({ message: "user dont have permession" })
        }
        const deletedTrip = await Trip.findByIdAndDelete(id);
        res.status(200).json({ deletedTrip });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllTrips,
    getOneTrip,
    getMyTrips,
    getTripsByAuthor,
    createTrip,
    updateTrip,
    deleteTrip
}
