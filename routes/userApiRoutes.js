var db = require("../models");

module.exports = function (app) {

  // Create a new post 
  app.post("/api/user", function (req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      state: req.body.state 
    })
    .then(function (response) {
      res.json(response);
    })
  });


  // Delete an user
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