const express = require("express");
const handlebars = require("express-handlebars");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("*", (req, res) => {
    res.redirect("/")
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on PORT ${PORT}`)
    })
})