const express = require('express');
const {
    getAllTrips,
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip,
    getMyTrips,
    getTripsByAuthor,
    searchTripsByName,
    updateTripReactions
} = require('../controllers/trips.controller.js');

const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler.js')

router.get('/', getAllTrips);

router.get('/:id', getOneTrip);

router.get('/authors/:author', getTripsByAuthor);

// Search trips by trip_name
router.get('/s/search', searchTripsByName);

// private routes
router.get('/me/trips', validateToken, getMyTrips);

router.post('/', validateToken, createTrip);

router.put('/:id', validateToken, updateTrip);

router.put('/reactions/:id', validateToken, updateTripReactions);

router.delete('/:id', validateToken, deleteTrip);

module.exports = router
