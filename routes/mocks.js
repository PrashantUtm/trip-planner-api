const express = require('express');
const router = express.Router();

const  { 
    getMockedTrips,
    getMockedTrip,
    createMockedTrip,
    updateMockedTrip,
    getMockedUsers,
    getMockedUser,
    createMockedUser
} = require('../controllers/mocks.js');

router.get('/trips/', getMockedTrips);
router.get('/trips/:id', getMockedTrip);
router.post('/trips/', createMockedTrip);
router.put('/trips/:id', updateMockedTrip);
router.put('/users/', getMockedUsers);
router.put('/users/:id', getMockedUser);
router.put('/users/', createMockedUser);

module.exports = router;