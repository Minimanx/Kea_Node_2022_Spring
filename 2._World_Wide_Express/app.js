const express = require("express");
const app = express();


const animalsUtils = require("./animals/animalsUtils.js");
console.log("favorite animals: " + animalsUtils.favoriteAnimals());

app.use(express.json());

app.use(express.static("public"));

const animalsRouter = require("./routers/animalsrouter.js");
app.use(animalsRouter.router);

//client side rendering. throwing index.html at the client and the client "paints" / renders it
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/index.html");
});

app.get("/heyo", function(req, res){
    res.sendFile(__dirname + "/public/frontpage/index.html");
    console.log("heyo");
});

app.get("/weather", (req, res) => {
    //res.send("<h1>Hello .... Want to know the weahter?</h1><h2>...hello??</h2>");
    res.sendFile(__dirname + "/public/weather.html");
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log("Server started at port: ", server.address().port);
});