const db = require("../models");

module.exports = app => {
    app.get("/", (req, res) => {
        db.posts
            .findAll()
            .then(results => { res.render("index", {posts: results}) })
            .catch(error => {
                console.log(error);
                res.status(503).end();
            })
    })

    return app;
}