const express = require('express');
require('dotenv').config();
// const { Client } = require('pg');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });


// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
// });

// client.connect()
//   .then(() => {
//     console.log('Connected to PostgreSQL');
//   })
//   .catch((err) => {
//     console.error('Error connecting to PostgreSQL:', err);
//   });

// // GET /users - Retrieve all users
// app.get('/users', (req, res) => {
//   client.query('SELECT * FROM users')
//     .then((result) => {
//       const users = result.rows;
//       res.json(users);
//     })
//     .catch((err) => {
//       console.error('Error executing query:', err);
//       res.status(500).json({ error: 'An error occurred' });
//     });
// });

// // POST /users - Create a new user
// app.post('/users', (req, res) => {
//   const { first_name, last_name, age, years_of_employment, role } = req.body;

//   client.query('INSERT INTO users (first_name, last_name, age, years_of_employment, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//     [first_name, last_name, age, years_of_employment, role])
//     .then((result) => {
//       const newUser = result.rows[0];
//       res.status(201).json(newUser);
//     })
//     .catch((err) => {
//       console.error('Error executing query:', err);
//       res.status(500).json({ error: 'An error occurred' });
//     });
// });


