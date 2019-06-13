const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 6001;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(port);
