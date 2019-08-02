var db = require("../models");

module.exports = function (app) {

    // GET all chapter posts
    app.get("/api/chapter", function (req, res) {
        db.Chapter.findAll({}).then(function (response) {
            res.json(response);
        })
    });

    // GET chapter by location
    app.get("/api/chapter", function (req, res) {
        db.Chapter.findAll({
            where: {
                id: req.body.id
            }
        }).then(function (response) {
            res.json(response);
        })
    });

    // Create a new chapter
    app.post("/api/chapter", function (req, res) {
        console.log(req.body);
        db.Chapter.create({
            location: req.body.location,
            image: req.body.image,
            info: req.body.info,
            contact: req.body.contact
        })
            .then(function (response) {
                res.json(response);
            })
    });

    // Update a new chapter
    app.put("/api/chapter", function (req, res) {
        db.Chapter.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (response) {
                res.json(response);
            })
    });

    // Delete a chapter
    app.delete("/api/chapter/:id", function (req, res) {
        db.Chapter.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (response) {
                res.json(response);
            });
    });
}