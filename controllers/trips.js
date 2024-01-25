const Trip = require('../models/Trip.js');
const { getUserId } = require('./auth.js');

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
            res.status(200).json({ trips})
        })
        .catch(error => res.status(500).json({msg: error}));
});

const getTrip = ((req, res) => {
    const id = String(req.params.id);
    Trip.find({ id: id })
    .then(result => {
        if (!result) {
            return res.status(404).send('Trip not found');
        }
        return res.json(result);
    })
    .catch(error => res.status(500).json({msg: error}));
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