const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const frontpage = fs.readFileSync("./public/pages/frontpage/index.html").toString();
const cheesegallery = fs.readFileSync("./public/pages/cheesegallery/cheesegallery.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpagePage = nav + frontpage + footer;
const cheesegalleryPage = nav + cheesegallery + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/cheesegallery", (req, res) => {
    res.send(cheesegalleryPage);
});


app.listen(3000, () => {
    console.log("Server running on port ", 3000)
});