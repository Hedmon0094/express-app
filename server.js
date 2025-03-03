//static route
const express = require('express');
const swaggerDocs = require('./swaggerConfig');

const app = express();
const PORT = 3000;

//middleware

app.use(express.json());
// innit swagger
swaggerDocs(app);

app.get('/', (req, res) => {
    res.send(' Hello, I am Express.js beginner ! See you soon  There');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs is available at http://localhost:${PORT}/api-docs`);
});

// // REST API
// app.use(express.json()); // Middleware to parse JSON data

// let users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' }
// ];

// // GET - Retrieve all users
// app.get('/users', (req, res) => {
//     res.json(users);
// });

// // GET - Retrieve a single user by ID
// app.get('/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).send('User not found');
//     res.json(user);
// });

// // POST - Create a new user
// app.post('/users', (req, res) => {
//     const newUser = { id: users.length + 1, ...req.body };
//     users.push(newUser);
//     res.status(201).json(newUser);
// });

// // PUT - Update an existing user
// app.put('/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id));
//     if (!user) return res.status(404).send('User not found');
//     Object.assign(user, req.body);
//     res.json(user);
// });

// // DELETE - Remove a user
// app.delete('/users/:id', (req, res) => {
//     users = users.filter(u => u.id !== parseInt(req.params.id));
//     res.status(204).send();
// });