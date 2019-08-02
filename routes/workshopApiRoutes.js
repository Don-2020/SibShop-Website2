// In the near future, we want to make this happens. 


var db = require("../models");

module.exports = function (app) {

    // Get all workshop info
    app.get("/api/workshop/:event", function (req, res) {
        db.Event.findAll({
            where: {
                category: req.params.event
            }
        }).then(function (response) {
            console.log("dbEvent", response);
            res.json(response);
        });
    });

    // ==================
    // Get all training info
    app.get("/api/workshop/:event", function (req, res) {
        db.Training.findAll({
            where: {
                training: req.params.training
            }
        }).then(function (response) {
            console.log("dbTrain", response);
            res.json(response);
        });
    });




}

