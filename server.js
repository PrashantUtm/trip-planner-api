const express = require('express');
const mongoose = require('mongoose');
const app = express();
const trips_routes = require('./routes/trips.js');
const users_routes = require('./routes/users.js');
const mocked_routes = require('./routes/mocks.js');
const auth_routes = require('./routes/auth.js');
const port = process.env.PORT || 5000;

require('dotenv').config();
if (process.env.USE_DB === 'true')
{
mongoose.connect(process.env.MONGO_URI)
  .then((result) => {
    app.listen(port)
    console.log("running DB");
  })
  .catch((err) => console.log(err));
} else {
  console.log("running without DB");
  app.listen(port)
}


app.use(express.json({limit: '50mb'}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
  });

app.options('/*', (_, res) => {
  res.sendStatus(200);
});

const { auth } = require('./controllers/auth.js');

app.use('/api/trips', auth, trips_routes);
app.use('/api/users', auth, users_routes);
app.use('/api/login', auth_routes);
app.use('/api/mocks', auth, mocked_routes);