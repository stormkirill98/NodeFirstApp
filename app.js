const express = require('express');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.all('/save', (req, res) => {
    console.log("handle request");
    if (req.method === 'POST') {
        let body = req.body;

        console.log(body);
    } else {
        res.status(501);
        res.end("501 This method is not implemented");
    }
});

app.listen(8080);

console.log("Server Running on 8080");