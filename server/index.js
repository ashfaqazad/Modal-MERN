const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRouter = require('./routes/router');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Routes
app.use('/auth', UserRouter);

// MongoDB Connection
mongoose.connect(process.env.DATABASE)
  .then(() => console.log('MongoDB Compass connected'))
  .catch((err) => console.error('Database connection failed:', err));

// app.use('*', (req, res) => {
//   console.log('Request URL:', req.originalUrl);
//   res.status(404).send('Not Found');
// });

// Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
