import db from "../createConnection.js";

db.actors.updateOne({ name: "Will Smith" }, { $push: { movies: "Pig" }});