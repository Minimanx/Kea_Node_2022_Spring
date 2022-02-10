const express = require("express");
const app = express();

app.use(express.json());

const listOfMovies = [];
let id = 1;

// JSON object for testing: {"title": "Spider-Man", "releaseYear": 2002}

app.get("/movies", (req, res) => {
    res.send(listOfMovies);
});

app.get("/movies/:id", (req, res) => {
    const getById = parseInt(req.params.id);
    const movie = listOfMovies.find(n => n.id === getById);
    res.send(movie);
});

app.post("/movies", (req, res) => {
    const movie = req.body;
    movie.id = id;
    id++;
    listOfMovies.push(movie);
    res.send(movie);
});

app.put("/movies/:id", (req, res) => {
    const getById = parseInt(req.params.id);
    const movieIndex = listOfMovies.findIndex(x => x.id === getById);
    listOfMovies[movieIndex].releaseYear = req.body.releaseYear;
    listOfMovies[movieIndex].title = req.body.title;
    res.send(listOfMovies[movieIndex]);
});

app.patch("/movies/:id", (req, res) => {
    const getById = parseInt(req.params.id);
    const movieIndex = listOfMovies.findIndex(x => x.id === getById);
    if(req.body.title != undefined){
        listOfMovies[movieIndex].title = req.body.title;
    }
    if(req.body.releaseYear != undefined){
        listOfMovies[movieIndex].releaseYear = req.body.releaseYear;
    }
    res.send(listOfMovies[movieIndex]);
});

app.delete("/movies/:id", (req, res) => {
    const getById = parseInt(req.params.id);
    const movieIndex = listOfMovies.findIndex(x => x.id === getById);
    if(movieIndex === -1){
        res.send({message: `${getById} not found`});
    }
    else{
        const movie = listOfMovies.splice(movieIndex, 1);
        res.send(movie);
    }
});




app.listen(8080);