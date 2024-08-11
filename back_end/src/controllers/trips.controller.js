const Trip = require('../models/trip.model.js');

const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.status(200).json(trips)
    } catch {
        res.status(500).json({ message: error.message });
    }
};

const getOneTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await Trip.findById(id)

        res.status(200).json(trip)
    } catch {
        res.status(500).json({ message: error.message });
    }
};

const createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(200).json(trip)
    } catch {
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
        const updatedTrip = await Trip.findById(id);
        res.status(200).json(updatedTrip)
    } catch {
        res.status(500).json({ message: error.message });
    }
};


// delete a Trip

const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params
        const trip = await Trip.findByIdAndDelete(id);

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json({ message: "Trip was deleted successfully :>" });
    } catch {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllTrips,
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip
}
