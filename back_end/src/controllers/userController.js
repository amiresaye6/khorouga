const db = require('../config/db');

// Endpoint for testing
const getHelloWorld = (req, res) => {
    res.send('Hello World');
};

// Endpoint to fetch users
const getUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json('Failed to retrieve users');
        return res.json(data);
    });
};

// Endpoint for user login
const loginUser = (req, res) => {
    const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
    const values = [req.body.name, req.body.password];

    db.query(sql, values, (err, data) => {
        if (err) return res.status(500).json('Login failed');
        if (data.length === 0) return res.status(401).json('Invalid credentials');
        return res.json(data);
    });
};

// Endpoint for user signup
const signupUser = (req, res) => {
    const { name, password, email } = req.body;

    // Basic validation
    if (!name || !password || !email) {
        return res.status(400).json('All fields are required');
    }

    // Check if the email already exists
    const checkEmailSql = 'SELECT * FROM users WHERE email = ?';
    db.query(checkEmailSql, [email], (err, results) => {
        if (err) return res.status(500).json('Error checking email');

        if (results.length > 0) {
            return res.status(400).json('Email already exists');
        }

        // Insert new user
        const insertUserSql = 'INSERT INTO users (name, password, email) VALUES (?, ?, ?)';
        db.query(insertUserSql, [name, password, email], (err, results) => {
            if (err) return res.status(500).json('Error creating user');
            return res.status(201).json('User created successfully');
        });
    });
};

module.exports = {
    getHelloWorld,
    getUsers,
    loginUser,
    signupUser
};
