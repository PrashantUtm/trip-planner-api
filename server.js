const express = require('express');
const mongoose = require('mongoose');
const app = express();
const trips_routes = require('./routes/trips.js');
const mocked_routes = require('./routes/mocks.js');
const port = process.env.PORT || 5000;

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
  });

app.use('/api/trips', trips_routes);
app.use('/api/mocks', mocked_routes);