const app = require('./app');

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
