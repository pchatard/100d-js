const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/example', (req, res) => {
    res.send('Hitting example route');
})


app.get('/example/:name/:age', (req, res) => {
    // Route parameters
    console.log(req.params);
    res.send(`Name: ${req.params.name}, Age: ${req.params.age}`);

    // Query string
    console.log(req.query);
});

app.post('/', (req, res) => {
    // req.body contains the data from the form
    console.log(req.body);
    res.send(('Thank you'));
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
