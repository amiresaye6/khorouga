const express = require('express');
const { getAllTrips, getOneTrip, createTrip, updateTrip, deleteTrip } = require('../controllers/trips.controller.js');
const router = express.Router();


router.get('/', getAllTrips);

router.get('/:id', getOneTrip);

router.post('/', createTrip);

router.put('/:id', updateTrip);

router.delete('/:id', deleteTrip);

module.exports = router
