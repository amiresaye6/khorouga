const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
const PORT = process.env.PORT || 5432;
const mongoUrl = process.env.CONNECTION_STRING

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("connected succesfully to the database:");
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    })
    .catch(() => {
        console.log("failed to connect to the database:");
    });
