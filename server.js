const express = require('express');
const mongoose = require('mongoose');
const app = express();
const trips_routes = require('./routes/trips.js');
const users_routes = require('./routes/users.js');
const mocked_routes = require('./routes/mocks.js');
const port = process.env.PORT || 5000;

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

//app.listen(port)

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
  });

const { auth } = require('./controllers/auth.js');

app.use('/api/trips', auth, trips_routes);
app.use('/api/users', auth, users_routes);
app.use('/api/login', require('./routes/auth.js'));
app.use('/api/mocks', mocked_routes);