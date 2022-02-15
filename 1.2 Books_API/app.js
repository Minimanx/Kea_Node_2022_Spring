const express = require("express");
const app = express();

app.use(express.json());

//
app.get("/libraries", (req, res) => {
    res.send(req.query);
});

app.get("/aboutclient/:name", (req, res) => {
    res.send({greeting: `Hello there ${req.params.name}`});
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});
