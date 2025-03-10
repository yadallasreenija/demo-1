require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3010;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to database'))
    .catch(err => console.error(`Database connection error: ${err.message}`));

app.get('/', (req, res) => res.send('Server is running...'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));