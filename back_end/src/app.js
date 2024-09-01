const express = require('express');
const cors = require('cors');
const tripsRoutes = require('./routes/trips.routes');
const authRouter = require('./routes/oauth');
const requestRouter = require('./routes/googleAuth.routes');
const usersRouter = require('./routes/users.routes');
const path = require('path');


const app = express();

// midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//routes
app.use('/api/trips', tripsRoutes);
app.use('/api/users', usersRouter);
app.use('/oauth', authRouter);
app.use('/request', requestRouter);

module.exports = app;
