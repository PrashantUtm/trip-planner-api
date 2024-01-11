const express = require('express');
const router = express.Router();

const  { 
    getTrips,
    getTrip,
    createTrip,
    updateTrip
} = require('../controllers/trips.js');

router.get('/', getTrips);
router.get('/:id', getTrip);
router.post('/', createTrip);
router.put('/:id', updateTrip);

module.exports = router;