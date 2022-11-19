const app = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');


// GET route
app.get('/', (req, res) =>{
    readFromFile('/db/db.json')
    .then((response) => res.json(JSON.parse(response)));
});


//POST route
app.post('/', (req, res) => {
 const {title, text } = req.body;
 if (title && text) {
    let id = Date.now();
    let createdNote = {
        title,
        text,
        id
    };
    readAndAppend(createdNote, './db/db.json');
    res.json('Your note has been added!');
 } 
 else {
    res.error('Something has gone wrong');
 }
});

//DELETE route



module.exports = app;