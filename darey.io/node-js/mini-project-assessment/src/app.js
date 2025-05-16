const express = require('express');
const itemsRoutes = require('./routes/items');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Use items routes
app.use('/api/items', itemsRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});