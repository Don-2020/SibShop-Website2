module.exports = function(sequelize, DataTypes) {
  var Library = sequelize.define("Library", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    url: DataTypes.TEXT,
    category: DataTypes.INTEGER
  },
  {freezeTableName: true}
  );
  return Library;
};
