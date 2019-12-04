const express = require('express');

const app = express();

app.get('/save', (req, res) => {
    if (req.method === 'POST') {

    } else {
        res.status(501);
        res.end("501 This method is not implemented");
    }
});

app.listen(8080);

console.log("Server Running on 8080");