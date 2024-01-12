const trips = require('../data/trips.js');
const users = require('../data/users.js');

const getMockedUsers = ((req, res) => {
    return res.status(200).json(users);
});

const createMockedUser = ((req, res) => {
    const newUser = req.body;
    users.push(newUser)
    res.status(201).json(newUser)
});

const getMockedUser = ((req, res) => {
    const id = String(req.params.id);
    const user = users.find(user => user.id == id);
    if (!user) {
        return res.status(204).send('User not found');
    }
    res.json(user);
});

const getMockedTrips = ((req, res) => {
    return res.status(200).json(trips.map(trip => ({ 
        id: trip.id, 
        title: trip.title, 
        startDestination: trip.startDestination, 
        finalDestination: trip.finalDestination,
        budget: trip.budget
    })));
});

const getMockedTrip = ((req, res) => {
    const id = String(req.params.id);
    const trip = trips.find(trip => trip.id == id);
    if (!trip) {
        return res.status(404).send('Trip not found');
    }
    res.json(trip);
});

const createMockedTrip = ((req, res) => {
    const newTrip = req.body;
    trips.push(newTrip)
    res.status(201).json(newTrip)
});

const updateMockedTrip = ((req, res) => {
    const id = Number(req.params.id)
    const index = trips.findIndex(trip => trip.id === id)
    if (index >= 0) {
        trips[index] = req.body;
        res.status(200).send(trips[index])
    } else {
        res.status(204).send('Trip not found')
    }
});

module.exports = {
    getMockedTrips,
    getMockedTrip,
    createMockedTrip,
    updateMockedTrip,
    getMockedUsers,
    getMockedUser,
    createMockedUser
}