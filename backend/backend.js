const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors({
    origin: 'http://frontendserver:3000'
}));

app.get('/api', (req, res) => {
    res.json({ message: 'Message on HTTP' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend server is running on http://localhost:${PORT}`);
});