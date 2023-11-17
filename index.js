var express = require('express');
var app = express();

const PORT = 8000;
app.set('view engine', 'pug');
app.set('views', './view-templates');


app.get("/", (req, res) => {
    // redirect to /setPlayerInfo
    res.redirect(304,"/setPlayerInfo");
});

app.get("/setPlayerInfo", (req,res) => {
    // ensure that both player names are input
    // call /startGame
    res.render('enterPlayerNames');
});

app.get("/startGame", (req,res) => {
    // create user objects -> That should have name,id(P1 or P2), currentScore=0, currentTurn=0
    // call /loadGameScreen
    res.send("The game can start now");
});

app.get("/loadGameScreen", (req,res) => {
    // check if game is over. If yes, then call /showResult
    // check which player has his turn(5 turns each), show current score and turn also
    // show a name fro DB and buttons to click 'YES' and 'NO'
    // implement 'YES'/'NO' logic and then call /loadGameScreen again
});

app.get("/showResults", (req, res) => {
    // show current result
    // show button to restart game, call /setPlayerInfo
});

app.listen(PORT);