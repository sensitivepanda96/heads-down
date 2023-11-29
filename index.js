var express = require('express');
const bodyParser = require('body-parser');
var app = express();

const PORT = 8000;
app.set('view engine', 'pug');
app.set('views', './view-templates');
app.use(bodyParser.urlencoded({ extended: true }));

const isBothPlayerNamesSet = (req,res,next) => {
    console.log("middleware player names",req.body.P1N,req.body.P2N);
    next();

};

app.use('/startGame',isBothPlayerNamesSet)

app.get("/", (req, res) => {
    // redirect to /setPlayerInfo
    console.log("in path /")
    res.redirect(302,"/setPlayerInfo");
});

app.get("/setPlayerInfo", (req,res) => {
    res.render('enterPlayerNames');
});

app.post("/startGame", (req,res) => {
    // create user objects -> That should have name,id(P1 or P2), currentScore=0, currentTurn=0
    // call /loadGameScreen
    // if players names exist, start the game, else re-render set player info
    res.render('gameScreen', {P1N:req.body.P1N,P2N:req.body.P2N});
    // res.send(`The game can start now with players ${req.body.P1N} and ${req.body.P1N}`);
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