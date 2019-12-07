const db = require("../models");

module.exports = app => {
    app.get("/api/posts", (req, res) => {
        db.posts
            .findAll()
            .then(results => { res.json(results) })
            .catch(error => { res.status(503).end()
            });
    })

    app.post("/api/posts/new", (req, res) => {
        const data = req.body;
        console.log(data)
        db.posts
            .create(data)
            .then(results => { res.json(results) })
            .catch(error => {
                console.log(error);
                res.status(400).end();
            });
    })

    app.put("/api/posts/:id", (req, res) => {
        const id = req.params.id;
        const data = req.body;
        db.posts
            .update(data, { where: { id: id } })
            .then(results => {
                if (results.affectedRows === 0) {
                    res.status(404).end();
                }
                res.status(200).end();
            })
            .catch(error => {
                console.log(error);
                res.status(503).end();
            })
    })

    return app;
}