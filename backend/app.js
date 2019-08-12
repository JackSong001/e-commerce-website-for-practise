const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.send('this is nodemo');
});


















const port = process.env.PORT || 3000;
app.set('port', port);
const server = http.createServer(app);

server.listen(port);