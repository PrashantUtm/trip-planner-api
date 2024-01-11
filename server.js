const express = require('express');
const mongoose = require('mongoose');
const app = express();
const trips_routes = require('./routes/trips.js');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/trips', trips_routes);