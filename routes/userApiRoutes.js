var db = require("../models");

module.exports = function (app) {


  //==================================

  // GET all community posts
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (response) {
      res.json(response);
    })
  });

  // Create a new post 
  app.post("/api/user", function (req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      location: req.body.location 
    })
    .then(function (response) {
      res.json(response);
    })
  });

  // Update a new post 
  app.put("/api/user", function (req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (response) {
        res.json(response);
      })
  });

  // Delete a post
  app.delete("/api/user/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (response) {
        res.json(response);
      });
  });
}