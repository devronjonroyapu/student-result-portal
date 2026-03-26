const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/result/:roll', (req, res) => {
    const roll = req.params.roll;

    const data = JSON.parse(fs.readFileSync('./data/students.json'));

    if (data[roll]) {
        res.json(data[roll]);
    } else {
        res.json({ error: "Result not found" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));