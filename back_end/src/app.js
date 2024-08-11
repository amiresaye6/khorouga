const express = require('express');
const cors = require('cors');
const tripsRoutes = require('./routes/trips.routes');
const app = express();

// midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/trips', tripsRoutes);

module.exports = app;
