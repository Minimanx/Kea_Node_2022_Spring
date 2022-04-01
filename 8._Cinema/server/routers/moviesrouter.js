import { Router } from "express";
const router = Router();
import { db } from "../database/createConnection.js";


const movies = [
    { id: 1, title: "Spiderman" },
    { id: 2, title: "Die Hard 3" }
];


router.get("/api/movies", async (req, res) => {
    const movies = await db.all(`SELECT * FROM MOVIES`);
    console.log(movies);
    res.send({ data: movies })
});

router.post("/api/movies", async (req, res) => {
    const { title } = req.body;
    const { changes } = await db.run("INSERT INTO movies (title) VALUES (?)",
                                        [title || "Unkown title"]);
    res.send({ rowsAffected: changes });
});

export default router;