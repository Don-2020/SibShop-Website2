var db = require("../models");

module.exports = function (app) {

  // Get all books by category (which is organized by number)
  // :category needs to be a number provided by the client side
  // Example: If Books is selected: "/api/library/1"
  // Example: If Article is selected: "/api/library/2"
  // Example: If Young is selected: "/api/library/4"
  // Example: If Adult is selected: "/api/library/3"
  app.get("/library/:category", function (req, res) {
    console.log(req.params.category);
    db.Library.findAll({
      where: {
        category: req.params.category // where column "category" in database contains the category number passed into the req.params.category
      }
    }).then(function (data) {
      res.render("library", {data:data});
    });
  });

  // app.get("/library", function(req, res) {
  //   console.log("library");
  //   db.Library.findAll({})
  //   .then(function(data){
  //     // console.log("==========   ", data);
  //     console.log(data);
  //     res.render("library", {data});
  //   })
  // });

  // Create a new library
  app.post("/api/library", function (req, res) {
    db.Library.create({
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      category: req.body.category
    }).then(function (response) {
      res.json(response);
    });
  });

  // Delete a library by id
  app.delete("/api/library/delete/:id", function (req, res) {
    console.log("dde")
    db.Library.destroy({ where: { id: req.params.id } }).then(function (response) {
      res.status(response);
      console.log(response);
      // res.json(response);
    });
  });
}