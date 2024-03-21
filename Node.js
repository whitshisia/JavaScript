const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Handle POST request to /login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate username and password (e.g., check against database)
    if (username === 'whit' && password === '12345') {
        res.status(200).send('Login successful!');
    } else {
        res.status(401).send('Login failed!');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
