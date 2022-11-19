const express = require('express');
notesRoute = require('./notes');
const app = express();


app.use('/notes', notesRoute);


module.exports = app;