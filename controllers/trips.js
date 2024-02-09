const Trip = require('../models/Trip.js');
const { getUserId } = require('./auth.js');
const { randomUUID } = require('crypto');

const getTrips = ((req, res) => {
    Trip.find({})
        .then(result => {    
            const token = req.headers.authorization;
            const userId = getUserId(token);
            const trips = result
            .filter(trip => trip.travellers.some(t => t.userId == userId))
            .map(trip => ({ 
                id: trip.id, 
                title: trip.title, 
                startDestination: trip.startDestination, 
                finalDestination: trip.finalDestination,
                budget: trip.budget
            }));
            res.status(200).json(trips)
        })
        .catch(error => res.status(500).json({msg: error}));
});

const getTrip = ((req, res) => {
    const id = String(req.params.id);
    const token = req.headers.authorization;
    const userId = getUserId(token);
    Trip.findOne({ id: id })
    .then(trip => {
        if (!trip) {
            return res.status(404).send('Trip not found');
        }
        if (!trip.travellers.some(t => t.userId == userId)) {
            return res.status(403).send('Access unauthorized');
        }
        return res.json(trip);
    })
    .catch(error => res.status(500).json({msg: error}));
});

const createTrip = ((req, res) => {
    const newTrip = req.body;
    const token = req.headers.authorization;
    const userId = getUserId(token);
    if (!validateTrip(newTrip, userId)) {
        return res.status(400).json('Missing required data')
    }
    newTrip['id'] = randomUUID();
    Trip.create(req.body)
        .then(result => res.status(201).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }));
});

const updateTrip = ((req, res) => {
    const updatedTrip = req.body;
    const token = req.headers.authorization;
    const userId = getUserId(token);
    const id = String(req.params.id);
    if (!validateTrip(updatedTrip, userId)) {
        return res.status(400).json('Missing required data')
    }
    Trip.updateOne({ id: id }, req.body)
        .then(result => {
            Trip.findOne({ id: id })
                .then(trip => {
                return res.status(200).json(trip);
            })
        })
        .catch((error) => res.status(500).json({msg:  error }));
});

const validateTrip = (trip, userId) => 
    trip.title && 
    trip.startDestination &&
    trip.startDestination.name &&
    trip.startDestination.date &&
    trip.finalDestination.name &&
    trip.finalDestination.date &&
    trip.travellers &&
    trip.travellers.some(t => t.userId === userId) &&
    trip.budget;

module.exports = {
    getTrips,
    getTrip,
    createTrip,
    updateTrip
}