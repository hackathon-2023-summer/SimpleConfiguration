const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const html = `
        <html>
        <head>
            <title>Frontend</title>
            <script>
                function fetchMessage() {
                    fetch('/fast/api')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('message').innerText = data.message;
                    });
                }
            </script>
        </head>
        <body>
            <h1>Hello from Frontend!</h1>
            <button onclick="fetchMessage()">Get Message from Backend</button>
            <p id="message"></p>
        </body>
        </html>
    `;

    res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend server is running on http://localhost:${PORT}`);
});