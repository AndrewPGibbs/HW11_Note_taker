const { express } = require('express');
const app = express();
notesRoute = require('.');

app.use('/notes', notesRoute);


module.exports = app;