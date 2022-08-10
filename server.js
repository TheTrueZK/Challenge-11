const PORT = process.env.PORT || 3001;
const express = require("express");
const fs = require("fs");
const database = require("./db/db.json");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(database.slice(1));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get ('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.listen(PORT, () => {
    console.log(`server now on port ${PORT}!`)
})



