// var db = require("../models");
// var app = express();

module.exports = function (sequelize, DataTypes) {
  // console.log("sequelize???00-----", sequelize);
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.TEXT,
    state: DataTypes.STRING
  },
    { freezeTableName: true }
  );
  return User;
};


