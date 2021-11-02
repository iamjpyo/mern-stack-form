const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

connectDB(); //Connecting Database 

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

//GET post to test API is working properly
app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/registration', require('./routes/api/registration'));
app.use('/api/registrationsinfo', require('./routes/api/getregistration'));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));