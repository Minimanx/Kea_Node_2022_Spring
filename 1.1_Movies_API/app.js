//library
const express = require("express");

//instance of server
const app = express();

app.use(express.json());

const listOfMovies = [
    { id: 1, "title": "Spider-Man", "releaseYear": 2002 },
    { id: 2, "title": "Spider-Man 2", "releaseYear": 2004 },
    { id: 3, "title": "Spider-Man 3", "releaseYear": 2006 }
];

let id = 3;

// JSON object for testing: {"title": "Spider-Man", "releaseYear": 2002}

app.get("/movies", (req, res) => {
    res.send({movies: listOfMovies});
});

app.get("/movies/:id", (req, res) => {
    const getById = parseInt(req.params.id);
    const foundMovie = listOfMovies.find(movie => movie.id === getById);
    foundMovie ? res.send({movie: foundMovie}) : res.status(204).send({});
});

app.post("/movies", (req, res) => {
    const movie = req.body;
    movie.id = ++id;
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

    //alternative
    const foundMovie = listOfMovies.find(movie => movie.id === Number(req.params.id));

    if(req.body.title != undefined){
        listOfMovies[movieIndex].title = req.body.title;
    }
    if(req.body.releaseYear != undefined){
        listOfMovies[movieIndex].releaseYear = req.body.releaseYear;
    }
    res.send(listOfMovies[movieIndex]);
});

//better patch
app.patch("/movies/:id", (req, res) => {
    const foundMovieIndex = movies.findIndex(movie => movie.id === Number(req.params.id));
    if (foundMovieIndex !== -1){
        const foundMovie = listOfMovies[foundMovieIndex];
        const movieToUpdateWith = { ...foundMovie, ...req.body, id: foundMovie.id };
        movies[foundMovieIndex] = movieToUpdateWith;
        res.send({movie: movieToUpdateWith});
    } else {
        res.status(404).send({});
    } 
});


app.delete("/movies/:id", (req, res) => {
    const getById = parseInt(req.params.id);
    const movieIndex = listOfMovies.findIndex(x => x.id === getById);
    if(movieIndex === -1){
        res.send({message: `${getById} not found`});
    }
    else{
        const movie = listOfMovies.splice(movieIndex, 1);
        res.send({data: movie});
    }
});




app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});