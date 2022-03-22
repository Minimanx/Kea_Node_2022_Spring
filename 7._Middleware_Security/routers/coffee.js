import Router from "express";
const router = Router();
// const router = require("express").Router

router.get("/fillcoffee", (req, res) => {
    console.log(req.session);
    req.session.coffeeAmount = 100;
    res.send();
});

router.get("/drinkcoffee", (req, res) => {
    req.session.coffeeAmount -= 40;
    if (req.session.coffeeAmount < 0) {
        res.redirect("/fillcoffee");
    }else {
        res.send({ message: `Slurp: you have ${req.session.coffeeAmount} coffee left`});
    }
});

export default router;