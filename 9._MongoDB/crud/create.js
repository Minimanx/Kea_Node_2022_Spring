import db from "../createConnection.js";

db.actors.insertOne({ name: "Will Smith", movies: ["Hitch", "After Earth"], money: 250 });
