const express = require('express');

const app = express();

app.all('/save', (req, res) => {
    console.log("handle request");
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(
                body
            );
            res.end('ok');
        });
    } else {
        res.status(501);
        res.end("501 This method is not implemented");
    }
});

app.listen(8080);

console.log("Server Running on 8080");