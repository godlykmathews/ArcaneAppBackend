require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db'); // Import MongoDB connection
const productRoutes = require('./routes/productRoutes'); // Import routes

const cors = require('cors'); // Import CORS

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
