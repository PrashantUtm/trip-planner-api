const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    id: String,
    title: String,
    budget: Number,
    startDestination: { name: String, date: Date },
    finalDestination: { name: String, date: Date },
    travellers: [{ userId: String, role: String }],
    otherDestinations: [{ name: String, date: Date }],
    checklistItems: [{ title: String, checked: Boolean }],
    photos: []
});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;