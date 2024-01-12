const Trip = require('../models/Trip.js');

const getTrips = ((req, res) => {
    Trip.find({})
        .then(result => {
            const trips = result.map(trip => ({ 
                id: trip.id, 
                title: trip.title, 
                startDestination: trip.startDestination, 
                finalDestination: trip.finalDestination,
                budget: trip.budget
            }));
            res.status(200).json({ trips})
        })
        .catch(error => res.status(500).json({msg: error}));
});

const getTrip = ((req, res) => {
    const id = String(req.params.id);
    const trip = trips.find(trip => trip.id == id);
    if (!trip) {
        return res.status(404).send('Trip not found');
    }
    res.json(trip);
});

const createTrip = ((req, res) => {
    Trip.create(req.body)
        .then(result => res.status(201).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }));
});

const updateTrip = ((req, res) => {
    const id = String(req.params.id);
    res.status(404).send('not yet implemented');
});

module.exports = {
    getTrips,
    getTrip,
    createTrip,
    updateTrip
}