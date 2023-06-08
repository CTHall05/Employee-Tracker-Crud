const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
