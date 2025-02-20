const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(' Hello, I am Express.js beginner ! See you soon ');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});