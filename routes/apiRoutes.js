




var db = require("../models");

module.exports = function (app) {
  // ==========================

  // Get all user info 
  app.get("/api/community/signup/:id", function (req, res) {
    console.log()
    db.SignUp.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (response) {
      console.log("dbSignup", response);
      res.json(response);
    });
  });

  // Create an input 
  app.post("/api/community/signup", function (req, res) {

    db.SignUp.create({
      name: req.body.name,
      email: req.body.email,
      location: req.body.location
    }).then(function (response) {
      res.json(response);
    });
  });

  // Update an input 
  app.put("/api/community/signup", function (req, res) {
    db.SignUp.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (response) {
        res.json(response);
      })
  });

  // Delete an input
  app.delete("/api/community/signup/:id", function (req, res) {
    db.SignUp.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (response) {
        res.json(response);
      });
  });

  // =======================
  // Get all workshop
  app.get("/api/community/workshop/:event", function (req, res) {
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
  app.get("/api/community/train/:event", function (req, res) {
    db.Train.findAll({
      where: {
        train: req.params.train
      }
    }).then(function (response) {
      console.log("dbTrain", response);
      res.json(response);
    });
  });




}

