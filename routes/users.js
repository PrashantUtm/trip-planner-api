const express = require('express');
const router = express.Router();

const  { 
    getUsers,
    createUser
} = require('../controllers/users.js');

router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;