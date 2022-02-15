const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Welcome!</h1>");
});

console.log(__dirname);

app.get("/weather", (req, res) => {
    //res.send("<h1>Hello .... Want to know the weahter?</h1><h2>...hello??</h2>");
    res.sendFile(__dirname + "/public/weather.html");
});


app.listen(8080, () => {
    console.log("Server started at port: ", 8080);
});