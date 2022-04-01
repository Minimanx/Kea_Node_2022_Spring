import express from "express";
const app = express();

app.use(express.json());

import path from "path";
app.use(express.static(path.resolve('../client/public')));

// import cors from "cors";
// app.use(cors());

import moviesrouter from "./routers/moviesrouter.js";
app.use(moviesrouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});