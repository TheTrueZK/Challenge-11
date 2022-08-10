const PORT = process.env.PORT || 3001;
const express = require("express");
const fs = require("fs");
const database = require("./db/db.json");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`server now on port ${PORT}!`)
})



