const express = require('express');
const fs = require('fs');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.all('/save', (req, res) => {
    if (req.method === 'POST') {
        let body = req.body;

        writeToFile(body);
    } else {
        res.status(501);
        res.end("501 This method is not implemented");
    }
});

app.listen(8080);

console.log("Server Running on 8080");


function writeToFile(input_obj) {
    fs.readFile('database.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            let obj = {
                values: []
            };

            if (data) {
               obj = JSON.parse(data); //now it an object
            }

            obj.values.push(input_obj); //add some data

            fs.writeFile('database.json',
                JSON.stringify(obj, null, 2),
                'utf8',
                (err) => {
                    if (err) console.log(err)
                }); // write it back
        }});
}
