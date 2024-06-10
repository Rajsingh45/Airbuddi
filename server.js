const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const aqiRoutes = require('./routes/aqi');
// const deviceRoutes = require('./routes/device'); // Add this line

const app = express();

app.use(cors({
    origin: 'https://visionary-sunburst-d9d8b5.netlify.app/',
    credentials: true,
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/aqi', {});

app.use('/auth', authRoutes);
app.use('/aqi', aqiRoutes);
// app.use('/device', deviceRoutes); // Add this line

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
