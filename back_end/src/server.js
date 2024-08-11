const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
const PORT = process.env.PORT || 5432;

mongoose.connect("mongodb+srv://amiralsayedwork:6zdLYJMajODV9jCW@backenddb.cp7te.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb")
    .then(() => {
        console.log("connected succesfully to the database:");
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    })
    .catch(() => {
        console.log("failed to connect to the database:");
    });
