const app = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');


// GET route
app.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((response) => res.json(JSON.parse(response)));
});


//POST route
app.post('/', (req, res) => {
 const { title, text } = req.body;
 if (title && text) {
    let id = Date.now();
    const createdNote = {
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

app.delete('/:id',(req, res) =>{
    const textId = req.params.id;
    readFromFile('./db/db.json')
    .then((response) => JSON.parse(response))
    .then((data) => {
        const newArray = data.filter((note) => note.id != textId);
        writeToFile('./db/db.json', newArray);
        res.json('Note has been DESTROYED');

    });
});

module.exports = app;