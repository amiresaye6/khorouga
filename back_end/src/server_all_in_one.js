const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Endpoint for testing
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Endpoint to fetch users (for testing purposes)
app.get('/users', (req, res) => {
    const sql = `SELECT * FROM users`;
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json('Failed to retrieve users');
        return res.json(data);
    });
});

// Endpoint for user login
app.post('/login', (req, res) => {
    const sql = `SELECT * FROM users WHERE name = ? AND password = ?`;
    const values = [
        req.body.name,
        req.body.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) return res.status(500).json('Login failed');
        if (data.length === 0) return res.status(401).json('Invalid credentials');
        return res.json(data);
    });
});

// Endpoint for user signup
app.post('/signup', (req, res) => {
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
});

app.listen(1234, () => {
    console.log("Listening on port 1234...");
});
