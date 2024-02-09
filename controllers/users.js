const User = require('../models/User.js');

const getUsers = ((req, res) => {
    User.find({})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({msg: error}));
});

const createUser = ((req, res) => {
    User.create(req.body)
        .then(result => res.status(201).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }));
});

module.exports = {
    getUsers,
    createUser
}