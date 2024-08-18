const express = require('express');
const { getAllTrips, getOneTrip, createTrip, updateTrip, deleteTrip, getMyTrips, getTripsByAuthor } = require('../controllers/trips.controller.js');
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler.js')

router.get('/', getAllTrips);

router.get('/:id', getOneTrip);

router.get('/authors/:author', getTripsByAuthor);

// private routes
router.get('/me/trips', validateToken, getMyTrips);

router.post('/', validateToken, createTrip);

router.put('/:id', validateToken, updateTrip);

router.delete('/:id', validateToken, deleteTrip);

module.exports = router