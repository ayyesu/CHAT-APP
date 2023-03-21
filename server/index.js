const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});
const app = express();

app.use(express.json());
app.use(cors());

const connection_string = process.env.ATLAS_URI;

mongoose
    .connect(connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected...'))
    .catch((error) => console.log('Mongodb connection failed:', error.message));

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}...`);
});
