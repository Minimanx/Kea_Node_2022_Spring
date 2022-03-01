const router = require("express").Router();
const {favoriteAnimals} = require("../animals/animalsUtils.js");

router.get("/amountoffavoriteanimals", (req, res) => {
    res.send({ data: favoriteAnimals() });
});

router.get("/favoriteanimals", (req, res) => {
    res.redirect("/amountoffavoriteanimals");
});

router.get("/cuteanimal", (req, res) => {
    if (req.query.cute === "yes") {
        res.send({ animal: "Giraffe" });
    }
    else {
        res.send({ animal: "Snake" });
    }
});

module.exports = {
    router
};