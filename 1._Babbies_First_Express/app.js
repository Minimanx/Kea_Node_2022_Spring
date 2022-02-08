const express = require("express"); //import express, assign to variable so we can use it (library)
const app = express(); //instantiate express (server instance)

//makes the app use json for parsing
app.use(express.json());

//import, assign and instantiate. Same as above, but instantly instantiate
//lose the "const express", therefore also the library functions
//const app = require("express")();


//takes endpoint and callback function
//callback function then takes a request and a response as an argument
//if you ever reach this endpoint, use my callback function
app.get("/", (req, res) => {
    res.send({ message: "Welcome to my first server!" });
});

app.post("/", (req, res) => {
    res.send(req.body);
});


app.get("/about/:id", (req, res) => {
    const id = req.params.id;
    if (id == 1){
        res.send({ info: "Specific info with id or whatever"})
    }
    res.send({ info: "This server is made in node.js" })
});

app.post("/opinion", (req, res) => {
    if (req.body.rating === 1){
        res.send({ response: "Thanks for your terrible rating" })
    }
    if (req.body.rating === 2){
        res.send({ response: "Thanks for your less terrible rating" })
    }
});



app.listen(8080); //8080 default dev port for HTTP, 9090 for HTTPS. Convention to have on the bottom