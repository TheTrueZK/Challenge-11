const express = require("express");
const fs = require("fs");
const {notes} = require("./db/db.json");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get ('/api/notes', (req, res) => {
    const results = notes
    res.json(results)
    // fs.readFile(__dirname + '/db/db.json', 'utf8',(err, data) => {
    //     if (err) {
    //         console.log(err)
    //         res.sendStatus(404)
    //         return 
    //     }
    //     return res.json(data)
    // })
})

function createNote(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}

app.post('/api/notes', (req, res) => {
    const newNote = createNote(req.body, notes);
    res.json(newNote);
});


app.listen(PORT, () => {
    console.log(`server now on port ${PORT}!`)
})



