const fs = require('fs');
var path = require("path");

const TakeNote = require("../../../db/db.json");
//const express = require("express");
//const Notes= require ("/db/db.json");
//dont need this here

//Get route to retrieve saved notes
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(TakeNote)
    })

    //post route 
    app.post("/api/notes", function (req, res) {
        req.body.id = Date.now();
        TakeNote.push(req.body);

        fs.writeFile(path.join(__dirname, "../../../db/db.json"), JSON.stringify(TakeNote), function (err) {
            if (err) return console.log(err);
            console.log(TakeNote);
        });

        return res.send("string");
    })

    //Delete Route
    app.delete("/api/notes/:id", function (req, res) {
        var uniqueID = req.params.id;
        var noteIndex = TakeNote.findIndex(TakeNote => TakeNote.id == uniqueID);

        TakeNote.splice(noteIndex, 1);
        fs.writeFile(path.join(__dirname, "../../../db/db.json"), JSON.stringify(TakeNote), function (err) {
            if (err) return console.log(err);
        });
        return res.send("string");

    })

}