const app = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');


// GET route
app.get('/', (req, res) =>{
    readFromFile('/db/db.json')
    .then((response) => res.json(JSON.parse(response)));
});


//POST route
app.post('/', (req, res) => {
    const {title}
})

//DELETE route



module.exports = router;