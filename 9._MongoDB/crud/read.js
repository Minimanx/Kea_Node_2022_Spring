import db from "../createConnection.js";

const allActors = await db.actors.find().toArray();

const brokeActors = await db.actors.find({ money: { $lt: 300 }}).toArray();

console.log(allActors);
console.log(brokeActors);