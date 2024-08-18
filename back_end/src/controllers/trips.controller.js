const Trip = require('../models/trip.model.js');
const redisClient = require('../utils/redisClient.js');

const getAllTrips = async (req, res) => {
    const cacheKey = 'allTrips';

    try {
        // Check cache first
        const cachedTrips = await redisClient.get(cacheKey);

        if (cachedTrips) {
            // Cach hits
            return res.status(200).json(JSON.parse(cachedTrips));
        }

        // If not in cache, fetch from database
        const trips = await Trip.find({});

        // Store result in cache
        await redisClient.set(cacheKey, JSON.stringify(trips), {
            EX: 3600 // Cache expiration in seconds (1 hour)
        });

        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneTrip = async (req, res) => {
    const { id } = req.params;
    const cacheKey = `trip:${id}`;

    try {
        // Check cache first
        const cachedTrip = await redisClient.get(cacheKey);

        if (cachedTrip) {
            return res.status(200).json(JSON.parse(cachedTrip));
        }

        // If not in cache, fetch from database
        const trip = await Trip.findById(id);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        // Store result in cache
        await redisClient.set(cacheKey, JSON.stringify(trip), {
            EX: 3600 // Cache expiration in seconds (1 hour)
        });

        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getTripsByAuthor = async (req, res) => {
    const { author } = req.params;
    const cacheKey = `authorTrips:${author}`;

    try {
        // Check cache first
        const cachedTrips = await redisClient.get(cacheKey);

        if (cachedTrips) {
            return res.status(200).json(JSON.parse(cachedTrips));
        }

        // If not in cache, fetch from database
        const trips = await Trip.find({ author });

        // Store result in cache
        await redisClient.set(cacheKey, JSON.stringify(trips), {
            EX: 3600 // Cache expiration in seconds (1 hour)
        });

        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// private endpoints >> need token
const getMyTrips = async (req, res) => {
    const cacheKey = `userTrips:${req.user.id}`;

    try {
        // Check cache first
        const cachedTrips = await redisClient.get(cacheKey);

        if (cachedTrips) {
            return res.status(200).json(JSON.parse(cachedTrips));
        }

        // If not in cache, fetch from database
        const trips = await Trip.find({ user_id: req.user.id });

        // Store result in cache
        await redisClient.set(cacheKey, JSON.stringify(trips), {
            EX: 3600 // Cache expiration in seconds (1 hour)
        });

        res.status(200).json(trips || { message: 'empty result' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createTrip = async (req, res) => {
    try {
        const trip = await Trip.create({ ...req.body, user_id: req.user.id });

        // Invalidate caches
        await redisClient.del('allTrips');
        await redisClient.del(`userTrips:${req.user.id}`);
        await redisClient.del(`authorTrips:${trip.author}`);

        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update a Trip
const updateTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await Trip.findById(id);

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        } else if (trip.user_id.toString() !== req.user.id) {
            return res.status(403).json({ message: "User doesn't have permission" });
        }

        const updatedTrip = await Trip.findByIdAndUpdate(id, req.body, { new: true });

        // Invalidate caches
        await redisClient.del('allTrips');
        await redisClient.del(`userTrips:${req.user.id}`);
        await redisClient.del(`authorTrips:${trip.author}`);
        await redisClient.del(`trip:${id}`);

        res.status(200).json(updatedTrip);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete a Trip
const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await Trip.findById(id);

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        } else if (trip.user_id.toString() !== req.user.id) {
            return res.status(403).json({ message: "User doesn't have permission" });
        }

        const deletedTrip = await Trip.findByIdAndDelete(id);

        // Invalidate caches
        await redisClient.del('allTrips');
        await redisClient.del(`userTrips:${req.user.id}`);
        await redisClient.del(`authorTrips:${trip.author}`);
        await redisClient.del(`trip:${id}`);

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
